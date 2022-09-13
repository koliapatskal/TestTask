import { ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyTableCellComponent } from 'src/app/components/my-table-cell/my-table-cell.component';

@Directive({
  selector: '[stretchSortCell]'
})
export class StretchSortCellDirective {

  @Input() stretchSortCell: string = '';
  private componentRef: ComponentRef<any>;

  constructor(
    private elementRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.componentRef = this.viewContainerRef.createComponent(MyTableCellComponent);
    this.elementRef.createEmbeddedView(this.componentRef);
  }

  ngOnInit(): void {
    this.componentRef.setInput('headerName', this.stretchSortCell);
    this.componentRef.setInput('isSort', true);
  }

}
