import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean =  false;
  serverCreationStatus: string = 'no server was created!';
  serverName: string = 'TestServer';
  serverCreated: boolean = false
  servers = ['TestServer', 'TestServer2']

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
    console.log(this.servers);
  }

  onUpdateServerName(event: InputEvent){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
