import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'Test content'}];

  onServerAdded(eventData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

  onBlueprintAdded(eventData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

}
