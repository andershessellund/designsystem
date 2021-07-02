import { Component } from '@angular/core';

const config = {
  selector: 'cookbook-chart-wip-example-accessibility',
  template: `<kirby-chart-wip 
  type="column" 
  [data]="[739, 1200, 584, 902, 30]" 
  [dataLabels]="['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday']"
>
  <table>
    <tr>
      <th>Day</th>
      <th>Number of visitors</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>739</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>1200</td>
    </tr>
    <tr>
      <td>Wedensday</td>
      <td>584</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>902</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>30</td>
    </tr>
  </table>
</kirby-chart-wip>`,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class ChartWipExampleAccessibilityComponent {
  template: string = config.template;
}