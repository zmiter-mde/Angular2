import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('newServerContent') newServerContentInput: ElementRef;

  onAddServer(newServerName: HTMLInputElement, newServerContent: HTMLInputElement) {
    console.log(this.newServerContentInput);
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.newServerContentInput.nativeElement.value});
  }

  onAddBlueprint(newServerName: HTMLInputElement, newServerContent: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: newServerName.value, serverContent: this.newServerContentInput.nativeElement.value});
  }

}
