import { AfterContentInit, AfterViewInit, ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, Injector, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyTableCellComponent } from '../components/my-table-cell/my-table-cell.component';

@Directive({
  selector: '[appMyTableCell]'
})
export class MyTableCellDirective implements OnInit{
  @Input() appMyTableCell: string = '';
  @Input() myTableCellSort: string = '';
  private componentRef: ComponentRef<any> | null = null;

  constructor(
    private elementRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.componentRef = this.viewContainerRef.createComponent(MyTableCellComponent);
    this.elementRef.createEmbeddedView(this.componentRef);
  }
  ngOnInit(): void {
    this.componentRef!.setInput('name', this.appMyTableCell);
    this.componentRef!.setInput('myTableCellSort', false);
  }
}
