import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navIsOpen : boolean = false;

  menuTrigger(){
    this.navIsOpen ? this.navIsOpen = false : this.navIsOpen = true;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
