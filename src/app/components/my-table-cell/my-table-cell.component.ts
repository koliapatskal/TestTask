import { AfterContentChecked, ElementRef } from '@angular/core';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-my-table-cell',
  templateUrl: './my-table-cell.component.html',
  styleUrls: ['./my-table-cell.component.css']
})
export class MyTableCellComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    console.log('From master');
  }

  public sett(str: any){


    this.renderer.appendChild(this.el.nativeElement.childNodes[0], str);

    this.cdr.detectChanges();
  }

}
