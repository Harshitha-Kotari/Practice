import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('mySidenav', { static: false }) mySidenav: ElementRef | undefined;
  @ViewChild('mainnav', { static: false }) mainnav: ElementRef | undefined;
  @Input() currentDate: any

  constructor() { }

  openNav() {
    console.log(this.mySidenav);
    if (this.mySidenav && this.mainnav) {
      this.mySidenav.nativeElement.style.width = "250px";
      this.mainnav.nativeElement.style.marginLeft = "250px";
    }
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
    if (this.mySidenav && this.mainnav) {
      this.mySidenav.nativeElement.style.width = "0";
      this.mainnav.nativeElement.style.marginLeft = "0";
    }
    document.body.style.backgroundColor = "white";
  }

  ngOnInit(): void {
  }

}
