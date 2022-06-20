import { Component, ElementRef, OnInit, Optional, ViewChild } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalController as IonicModalController } from '@ionic/angular';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';

import { DesignTokenHelper } from '@kirbydesign/core';

import { ScreenSize, TestHelper } from '../../../testing/test-helper';
import { WindowRef } from '../../../types/window-ref';
import { ButtonComponent } from '../../button/button.component';
import { IconComponent } from '../../icon';
import { PageProgressComponent, PageTitleComponent } from '../../page/page.component';
import { ModalFooterComponent } from '../footer/modal-footer.component';
import { ModalCompactWrapperComponent } from '../modal-wrapper/compact/modal-compact-wrapper.component';
import { ModalConfig, ModalFlavor, ModalSize } from '../modal-wrapper/config/modal-config';
import { ModalWrapperComponent } from '../modal-wrapper/modal-wrapper.component';

import { ModalNavigationService } from './modal-navigation.service';
import { ModalHelper } from './modal.helper';
import { Modal, Overlay } from './modal.interfaces';

@Component({
  template: `
    <h2>Embedded Input</h2>
    <input #input />
  `,
})
class InputEmbeddedComponent implements OnInit {
  @ViewChild('input', { static: true, read: ElementRef })
  input: ElementRef;

  constructor(@Optional() private modal?: Modal) {}

  ngOnInit() {
    this.modal && this.modal.didPresent.then(() => this.input.nativeElement.focus());
  }
}

@Component({
  template: `
    <div [style.height.px]="height">Content</div>
    <kirby-modal-footer>
      <button kirby-button>Button inside footer</button>
    </kirby-modal-footer>
  `,
})
class ContentOverflowsWithFooterEmbeddedComponent {
  height: number = window.innerHeight;
}

@Component({
  template: ` <div style="height: 1px;">Content</div> `,
})
class ContentWithNoOverflowEmbeddedComponent {}

@Component({
  template: `
    <kirby-page-progress>
      <div style="height: 50px; width: 50px; border: 1px solid red;"></div>
    </kirby-page-progress>
    <kirby-page-title>Modal With Page Progress</kirby-page-title>
  `,
})
class PageProgressEmbeddedComponent {}

describe('ModalHelper', () => {
  let spectator: SpectatorService<ModalHelper>;
  let modalHelper: ModalHelper;
  let ionModalController: IonicModalController;
  let overlay: Overlay;
  let ionModal: HTMLIonModalElement;
  let ionBackdrop: HTMLIonBackdropElement;
  let modalShadow: HTMLElement;
  let ionModalWrapper: HTMLElement;
  let dummyPresentingElement: HTMLElement;

  const defaultBackdropOpacity = '0.4';
  const invisibleBackdropOpacity = '0.01';
  const defaultBorderRadius = DesignTokenHelper.borderRadius();
  const size = DesignTokenHelper.size;
  const backgroundColor = DesignTokenHelper.backgroundColor();
  const modalPaddingTopPx = size('xl');
  const modalPaddingTop = parseInt(modalPaddingTopPx);
  const modalHeaderHeight = 46;

  const createService = createServiceFactory({
    service: ModalHelper,
    imports: [TestHelper.ionicModuleForTest, RouterTestingModule],
    providers: [
      {
        provide: WindowRef,
        useValue: <WindowRef>{ nativeWindow: window },
      },
    ],
    declarations: [
      ButtonComponent,
      ModalFooterComponent,
      ModalWrapperComponent,
      ModalCompactWrapperComponent,
      PageTitleComponent,
      PageProgressComponent,
      IconComponent,
      PageProgressEmbeddedComponent,
    ],
    entryComponents: [
      InputEmbeddedComponent,
      ContentOverflowsWithFooterEmbeddedComponent,
      ContentWithNoOverflowEmbeddedComponent,
    ],
    mocks: [ModalNavigationService],
  });

  beforeAll(() => {
    dummyPresentingElement = window.document.createElement('div');
    dummyPresentingElement.innerHTML = '<h1>Dummy Presenting Element</h1>';
    dummyPresentingElement.style.position = 'absolute';
    dummyPresentingElement.style.top = '0px';
    dummyPresentingElement.style.right = '0px';
    dummyPresentingElement.style.bottom = '0px';
    dummyPresentingElement.style.left = '0px';
    dummyPresentingElement.style.backgroundColor = DesignTokenHelper.backgroundColor();
    window.document.body.append(dummyPresentingElement);
  });

  afterAll(() => {
    dummyPresentingElement.remove();
  });

  beforeEach(() => {
    spectator = createService();
    modalHelper = spectator.service;
    ionModalController = spectator.inject(IonicModalController);
  });

  const openOverlay = async (config: ModalConfig) => {
    overlay = await modalHelper.showModalWindow(config);
    ionModal = await ionModalController.getTop();
    expect(ionModal).toBeTruthy();
    ionModalWrapper = ionModal.querySelector(':scope > .modal-wrapper');
    expect(ionModalWrapper).toBeTruthy();
    ionBackdrop = ionModal.querySelector(':scope > ion-backdrop');
    expect(ionBackdrop).toBeTruthy();
    modalShadow = ionModal.querySelector<HTMLElement>(':scope > .modal-shadow');
    expect(modalShadow).toBeTruthy();
  };

  const openModal = async (component?: any, size?: ModalSize) => {
    await openOverlay({ flavor: 'modal', component, size });
  };

  const openDrawer = async (
    title?: string,
    component?: any,
    size?: ModalSize,
    interactWithBackground?: boolean
  ) => {
    await openOverlay({ flavor: 'drawer', component, size, interactWithBackground });
  };

  describe('showModalWindow', () => {
    const allow_scroll_class = 'allow-background-scroll';

    describe(`When drawer can interact with background`, () => {
      beforeEach(async () => {
        await openDrawer('Drawer with interact with background', null, null, true);
      });

      it(`body should be scrollable`, async () => {
        expect(window.document.body.classList).toContain(allow_scroll_class);
        expect(window.document.body).toHaveComputedStyle({
          overflow: 'visible',
        });
        await overlay.dismiss();
      });

      it(`Drawer close should remove '${allow_scroll_class}'`, async () => {
        await overlay.dismiss();
        expect(window.document.body.classList).not.toContain(allow_scroll_class);
      });
    });

    describe(`When drawer can not interact with background`, () => {
      beforeEach(async () => {
        await openDrawer('Drawer with no interact with background', null, null, false);
      });

      afterEach(async () => {
        await overlay.dismiss();
      });

      it(`body should not be scrollable`, () => {
        expect(window.document.body.classList).not.toContain(allow_scroll_class);
      });
    });

    describe('sizing', () => {
      beforeEach(() => {
        TestHelper.scrollMainWindowToTop();
      });

      afterEach(async () => {
        await overlay.dismiss();
      });

      const expectSize = (size: ModalSize | undefined) => {
        expect(ionModal.classList.contains('kirby-modal-small')).toBe(size === 'small');
        expect(ionModal.classList.contains('kirby-modal-medium')).toBe(size === 'medium');
        expect(ionModal.classList.contains('kirby-modal-large')).toBe(size === 'large');
      };

      it('modal should have min-height', async () => {
        await openModal();

        expect(ionModalWrapper).toHaveComputedStyle({
          '--min-height': DesignTokenHelper.modalDefaultHeight,
        });
      });

      it('drawer should have min-height', async () => {
        await openDrawer();

        expect(ionModalWrapper).toHaveComputedStyle({
          '--min-height': DesignTokenHelper.drawerDefaultHeight,
        });
      });

      it('modal should be default sized (medium), if size is not provided', async () => {
        await openModal();

        expectSize('medium');
      });

      it('modal should be sized `small`', async () => {
        await openModal(undefined, 'small');

        expectSize('small');
      });

      it('modal should be sized `medium`', async () => {
        await openModal(undefined, 'medium');

        expectSize('medium');
      });

      it('modal should be sized `large`', async () => {
        await openModal(undefined, 'large');

        expectSize('large');
      });

      it('modal should be sized `full-height`', async () => {
        await openModal(undefined, 'full-height');

        expectSize('full-height');
        const expectedHeight = window.innerHeight - modalPaddingTop;
        expect(ionModalWrapper).toHaveComputedStyle({ '--height': '100%' });
        expect(ionModalWrapper).toHaveComputedStyle({ height: `${expectedHeight}px` });
      });

      it('drawer should be sized `full-height`', async () => {
        await openDrawer('Full-height Drawer', undefined, 'full-height');

        expectSize('full-height');
        const drawerPaddingTop = modalPaddingTop + modalHeaderHeight / 2;
        const expectedHeight = window.innerHeight - drawerPaddingTop;
        expect(ionModalWrapper).toHaveComputedStyle({ '--height': '100%' });
        expect(ionModalWrapper).toHaveComputedStyle({ height: `${expectedHeight}px` });
      });

      it('should not set default size class if flavor is `drawer`', async () => {
        await openDrawer();

        expectSize(undefined);
      });

      it("should add class `full-height`, if content can't fit in viewport", async () => {
        await openDrawer('Modal with full height', ContentOverflowsWithFooterEmbeddedComponent);
        await TestHelper.waitForResizeObserver();

        expect(ionModalWrapper.classList.contains('full-height')).toBeTrue();
      });

      it('should NOT add class `full-height`, if content can fit in viewport', async () => {
        await openModal(ContentWithNoOverflowEmbeddedComponent);
        await TestHelper.waitForResizeObserver();

        expect(ionModalWrapper.classList.contains('full-height')).toBeFalse();
      });

      it('should have footer visible at the bottom of viewport, when full-height', async () => {
        await openModal(ContentOverflowsWithFooterEmbeddedComponent);
        const footer = ionModal.querySelector('kirby-modal-footer');
        expect(footer).toBeTruthy();
        await TestHelper.waitForResizeObserver();

        expect(ionModalWrapper.classList.contains('full-height')).toBeTrue();
        expect(footer.getBoundingClientRect().bottom).toEqual(window.innerHeight);
      });
    });

    describe(`with default flavor ('modal')`, () => {
      beforeEach(async () => {
        await openModal(InputEmbeddedComponent);
      });

      afterEach(async () => {
        await overlay.dismiss();
      });

      it('modal should have correct padding-top', () => {
        expect(ionModal).toHaveComputedStyle({ 'padding-top': modalPaddingTopPx });
      });

      it('modal window should not take focus from embedded input after opening', async () => {
        const ionContent = ionModal.querySelector<HTMLElement>('ion-content');
        await TestHelper.whenReady(ionContent);

        const input: HTMLInputElement = ionContent.querySelector<HTMLInputElement>('input');
        expect(input).withContext('Input is not defined').toEqual(jasmine.anything());
        expect(document.activeElement).toEqual(input);
      });
    });

    describe(`with 'drawer' flavor`, () => {
      beforeEach(async () => {
        await openDrawer();
      });

      afterEach(async () => {
        await overlay.dismiss();
      });

      it('modal should have correct padding-top', () => {
        expect(ionModal).toHaveComputedStyle({
          'padding-top': `${modalPaddingTop + modalHeaderHeight / 2}px`,
        });
      });
    });

    describe(`with 'compact' flavor`, () => {
      beforeEach(async () => {
        await openOverlay({
          flavor: 'compact',
          component: undefined,
        });
      });

      afterEach(async () => {
        await overlay.dismiss();
      });

      it('wrapper should have correct style', () => {
        expect(ionModalWrapper).toHaveComputedStyle({
          'background-color': backgroundColor,
          'border-radius': defaultBorderRadius,
          'max-width': DesignTokenHelper.compactModalMaxWidth(),
          'text-align': 'center',
        });
        expect(ionModalWrapper.style.height).toEqual('');
      });

      it('modal should have correct padding-top', () => {
        expect(ionModal).toHaveComputedStyle({ 'padding-top': '0px' });
      });
    });

    describe('title', () => {
      let ionToolbarElement: HTMLIonToolbarElement;
      let pageTitleElement: HTMLDivElement;
      let pageTitleVerticalCenter: number;

      beforeEach(async () => {
        await openModal(PageProgressEmbeddedComponent);
        ionToolbarElement = ionModalWrapper.querySelector('ion-toolbar');
        pageTitleElement = ionToolbarElement.querySelector('kirby-page-title');
        pageTitleVerticalCenter = getElementVerticalCenter(pageTitleElement);
      });

      afterEach(async () => {
        await overlay.dismiss();
      });

      it('should align vertically with close button', () => {
        const closeButtonElement = ionToolbarElement.querySelector('[kirby-button]');
        const closeButtonVerticalCenter = getElementVerticalCenter(closeButtonElement);

        expect(closeButtonVerticalCenter).toEqual(pageTitleVerticalCenter);
      });

      it('should align vertically with page progress', () => {
        const pageProgressElement = ionToolbarElement.querySelector('kirby-page-progress');
        const pageProgressVerticalCenter = getElementVerticalCenter(pageProgressElement);

        expect(pageTitleVerticalCenter).toEqual(pageProgressVerticalCenter);
      });

      it('should have correct padding', () => {
        const toolbarContainer = ionToolbarElement.shadowRoot.querySelector('.toolbar-container');
        const expectedPadding = size('s');
        const expectedTopSpacingTotal = size('m');
        const expectedAdditionalTopPadding =
          parseInt(expectedTopSpacingTotal) - parseInt(expectedPadding);

        expect(toolbarContainer).toHaveComputedStyle({
          padding: expectedPadding,
        });
        expect(ionToolbarElement).toHaveComputedStyle({
          'padding-top': `${expectedAdditionalTopPadding}px`,
        });
      });
    });

    describe('on small screens', () => {
      beforeAll(async () => {
        await TestHelper.resizeTestWindow(TestHelper.screensize.phone);
      });

      afterAll(() => {
        TestHelper.resetTestWindow();
      });

      describe('when iOS safe-area is present', () => {
        const safeAreaTop = '20px';

        beforeAll(() => {
          window.document.documentElement.style.setProperty('--ion-safe-area-top', safeAreaTop);
        });

        afterAll(() => {
          window.document.documentElement.style.removeProperty('--ion-safe-area-top');
        });

        it('modal toolbar should respect iOS safe-area', async () => {
          await openModal();

          const ionToolbar = ionModal.querySelector('ion-header > ion-toolbar');
          expect(ionToolbar).toHaveComputedStyle({ 'padding-top': safeAreaTop });
          await overlay.dismiss();
        });

        it('drawer should respect iOS safe-area', async () => {
          await openDrawer('Drawer On Presenting Element');

          const expectedPaddingTop = `${parseInt(size('m')) + parseInt(safeAreaTop)}px`;
          expect(ionModal).toHaveComputedStyle({ 'padding-top': expectedPaddingTop });
          await overlay.dismiss();
        });

        it('drawer toolbar should not have additional padding', async () => {
          await openDrawer('Drawer On Presenting Element');

          const ionToolbar = ionModal.querySelector('ion-header > ion-toolbar');
          expect(ionToolbar).toHaveComputedStyle({ 'padding-top': '0px' });
          await overlay.dismiss();
        });
      });

      describe('sizing', () => {
        afterEach(async () => {
          await overlay.dismiss();
        });

        const expectSize = (size: ModalSize | undefined) => {
          expect(ionModal.classList.contains('small')).toBe(size === 'small');
          expect(ionModal.classList.contains('medium')).toBe(size === 'medium');
          expect(ionModal.classList.contains('large')).toBe(size === 'large');
        };

        it('modal should be full height', async () => {
          await openModal();

          expect(ionModalWrapper).toHaveComputedStyle({
            '--height': '100%',
          });
        });

        it('drawer should have min-height', async () => {
          await openDrawer();

          expect(ionModalWrapper).toHaveComputedStyle({
            '--min-height': DesignTokenHelper.drawerDefaultHeight,
          });
        });

        it('drawer should be sized `full-height`', async () => {
          await openDrawer('Full-height Drawer', undefined, 'full-height');

          expectSize('full-height');
          const drawerPaddingTop = parseInt(size('m'));
          const expectedHeight = window.innerHeight - drawerPaddingTop;
          expect(ionModalWrapper).toHaveComputedStyle({ '--height': '100%' });
          expect(ionModalWrapper).toHaveComputedStyle({ height: `${expectedHeight}px` });
        });
      });

      describe(`with 'drawer' flavor`, () => {
        beforeEach(async () => {
          await openDrawer();
        });

        afterEach(async () => {
          await overlay.dismiss();
        });

        it('drawer should have correct padding-top', () => {
          expect(ionModal).toHaveComputedStyle({ 'padding-top': size('m') });
        });
      });

      describe('when iOS safe-area is present', () => {
        const safeAreaTop = '20px';
        beforeAll(() => {
          window.document.documentElement.style.setProperty('--ion-safe-area-top', safeAreaTop);
        });

        afterAll(() => {
          window.document.documentElement.style.removeProperty('--ion-safe-area-top');
        });

        it('modal toolbar should respect iOS safe-area', async () => {
          await openModal();

          const ionToolbar = ionModal.querySelector('ion-header > ion-toolbar');
          expect(ionToolbar).toHaveComputedStyle({ 'padding-top': safeAreaTop });
          await overlay.dismiss();
        });

        it('drawer should respect iOS safe-area', async () => {
          await openDrawer();

          const expectedPaddingTop = `${parseInt(size('m')) + parseInt(safeAreaTop)}px`;
          expect(ionModal).toHaveComputedStyle({ 'padding-top': expectedPaddingTop });
          await overlay.dismiss();
        });

        it('drawer toolbar should not have additional padding', async () => {
          await openDrawer();

          const ionToolbar = ionModal.querySelector('ion-header > ion-toolbar');
          expect(ionToolbar).toHaveComputedStyle({ 'padding-top': '0px' });
          await overlay.dismiss();
        });
      });

      describe('title', () => {
        let ionToolbarElement: HTMLIonToolbarElement;
        let pageTitleElement: HTMLDivElement;
        let pageTitleVerticalCenter: number;

        beforeEach(async () => {
          await openModal(PageProgressEmbeddedComponent);
          ionToolbarElement = ionModalWrapper.querySelector('ion-toolbar');
          pageTitleElement = ionToolbarElement.querySelector('kirby-page-title');
          pageTitleVerticalCenter = getElementVerticalCenter(pageTitleElement);
        });

        afterEach(async () => {
          await overlay.dismiss();
        });

        it('should align vertically with close button', () => {
          const closeButtonElement = ionToolbarElement.querySelector('[kirby-button]');
          const closeButtonVerticalCenter = getElementVerticalCenter(closeButtonElement);

          expect(closeButtonVerticalCenter).toEqual(pageTitleVerticalCenter);
        });

        it('should align vertically with page progress', () => {
          const pageProgressElement = ionToolbarElement.querySelector('kirby-page-progress');
          const pageProgressVerticalCenter = getElementVerticalCenter(pageProgressElement);

          expect(pageTitleVerticalCenter).toEqual(pageProgressVerticalCenter);
        });

        it('should have correct padding', () => {
          const toolbarContainer = ionToolbarElement.shadowRoot.querySelector('.toolbar-container');
          const expectedInlinePadding = size('s');
          const expectedBlockPadding = size('xs');

          expect(toolbarContainer).toHaveComputedStyle({
            padding: `${expectedBlockPadding} ${expectedInlinePadding}`,
          });
          expect(ionToolbarElement).toHaveComputedStyle({
            'padding-top': '0px',
          });
        });
      });
    });
  });
});

function getElementVerticalCenter(element: Element): number {
  const elementDOMRect = element.getBoundingClientRect();
  return elementDOMRect.top + elementDOMRect.height / 2;
}
