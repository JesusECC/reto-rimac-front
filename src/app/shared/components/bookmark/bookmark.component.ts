import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  public text  : string
  public open  : boolean = false;
  public searchResult  : boolean = false;
  public searchResultEmpty  : boolean = false;
  public bookmarkItems : any[] = [];

  constructor() {  }

  ngOnInit() {
  }

  openBookmarkSearch() {
    this.open = !this.open
    this.removeFix();
  }

  searchTerm(term: any) {
  }

  checkSearchResultEmpty(items) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.getElementById("canvas-bookmark").classList.add("offcanvas-bookmark");
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
  }

  addToBookmark(items) {
    const index = this.bookmarkItems.indexOf(items);
    if(index === -1 && !items.bookmark){
      items.bookmark = true;
      this.bookmarkItems.push(items)
      this.text = "";
    } else {
      this.bookmarkItems.splice(index, 1);
      items.bookmark = false;
    }
  }

}
