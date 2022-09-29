import { ComponentFactoryResolver, ComponentRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyTableCellComponent } from 'src/app/components/my-table-cell/my-table-cell.component';

@Directive({
  selector: '[stretchSortCell]'
})
export class StretchSortCellDirective {

  @Input() stretchSortCell: string = '';
  private componentRef: ComponentRef<any>;

  constructor(
    private elementRef: TemplateRef<any>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyTableCellComponent);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.elementRef.createEmbeddedView(this.componentRef);
  }

  ngOnInit(): void {
    //this.componentRef.setInput('headerName', this.stretchSortCell);
    //this.componentRef.setInput('isSort', true);
    this.componentRef.instance.headerName = this.stretchSortCell;
    this.componentRef.instance.isSort = true;
  }

}
