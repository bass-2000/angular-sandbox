import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="alert alert-danger" role="alert">
      <p>This is a warning, you are in danger!</p>
    </div>
  `,
  styles: [
    // `
    //   p {
    //     padding: 20px;
    //     background-color: mistyrose;
    //     border: 1px solid red;
    //   }
    // `
  ]
})
export class WarningAlertComponent {

}
