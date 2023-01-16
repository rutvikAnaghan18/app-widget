import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  buttonClicked: boolean = false
  home:boolean = true;
  message:boolean = false;
  messageBox:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  widget(){
    if(this.buttonClicked == false){
      this.buttonClicked = true;
    }else {
      this.buttonClicked = false
    }
  }

  homeClick(){
    if(this.home == false){
      this.home = true;
      this.message = false;
      this.messageBox = false;
    }
  }
  
  messageClick(){
    if(this.message == false){
      this.message = true;
      this.home = false;
      this.messageBox = false;
    }
  }

  messageBoxClick(){
    if(this.messageBox == false){
      this.messageBox = true;
      this.message = false;
      this.home = false;
    }
  }
}
