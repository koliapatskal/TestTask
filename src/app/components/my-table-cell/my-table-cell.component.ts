import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-my-table-cell',
  templateUrl: './my-table-cell.component.html',
  styleUrls: ['./my-table-cell.component.css']
})
export class MyTableCellComponent implements OnInit {
  @Input() headerName: string = '';
  @Input() isSort: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
