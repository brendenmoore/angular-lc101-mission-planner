import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() listArray: string[];
  selectedItem: string;
  editItemInput: string;
  newItemInput: string;

  constructor() {}

  ngOnInit() {}

  add(itemName: string) {
    if (this.isDuplicate(itemName)) {
      alert("Error: Cannot allow duplicate names.");
    } else {
      this.listArray.push(itemName);
      this.newItemInput = "";
    }
  }
  remove(item: string) {
    let index = this.listArray.indexOf(item);
    this.listArray.splice(index, 1);
  }
  edit(item: string) {
    this.selectedItem = item;
    this.editItemInput = item;
  }
  save(item: string) {
    if (this.isDuplicate(item)) {
      alert("Error: Cannot allow duplicate names.");
    } else {
      let index = this.listArray.indexOf(this.selectedItem);
      this.listArray[index] = item;
      this.selectedItem = null;
      this.editItemInput = "";
    }
  }
  isDuplicate(item: string) {
    if (item === this.selectedItem) {
      return false;
    } else {
      return this.listArray.indexOf(item) > -1;
    }
  }
}
