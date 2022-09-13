import { ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyTableCellComponent } from 'src/app/components/my-table-cell/my-table-cell.component';


@Directive({
  selector: '[stretchCell]'
})
export class StretchCellDirective {
  @Input() stretchCell: string = '';
  private componentRef: ComponentRef<any>;

  constructor(
    private elementRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.componentRef = this.viewContainerRef.createComponent(MyTableCellComponent);
    this.elementRef.createEmbeddedView(this.componentRef);
  }

  ngOnInit(): void {
    this.componentRef.setInput('headerName', this.stretchCell);
  }
}
