
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public openNav: boolean = false
  public right_sidebar: boolean = false
  public text: string
  public isOpenMobile: boolean = false
  @Output() rightSidebarEvent = new EventEmitter<boolean>();


  ngOnInit() {

  }

}
