import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Dummy', content: 'Just for test'}];

  onServerAdded(serverData: {serverName: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.content
    });
  }
}
