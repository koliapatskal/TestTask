import { AfterContentInit, AfterViewChecked, AfterViewInit, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyTableCellComponent } from 'src/app/components/my-table-cell/my-table-cell.component';

@Directive({
  selector: 'table[appStretchTable]'
})
export class StretchTableDirective implements OnInit, AfterViewInit {
  private curTh!: any;
  private mouseMoveFunc!: any;


  constructor(private el: ElementRef, private componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer2, private viewContainerRef: ViewContainerRef) { 
    
    
    }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
    let THs = this.el.nativeElement.getElementsByTagName('th');
    for(let i = 0; i < THs.length - 1; i++){
      
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyTableCellComponent);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      let content = THs[i].childNodes[0];

      this.renderer.removeChild(THs[i], content);
      componentRef.instance.sett(content);
      this.renderer.appendChild(THs[i], componentRef.location.nativeElement);
    }
  }

  @HostListener('mousedown',['$event']) onMouseDown(event: any){
    if(!event.target.closest(".limit")){
      return;
    }

    this.curTh = event.target.closest("th");

    this.mouseMoveFunc = this.changeWidth.bind(this);
    document.addEventListener('mouseup', this.onUpMouse.bind(this), {once: true})
    document.addEventListener('mousemove', this.mouseMoveFunc);
    document.querySelector('body')!.style.userSelect = 'none';
  }

  private onUpMouse(){
    document.removeEventListener('mousemove', this.mouseMoveFunc);
    document.querySelector('body')!.style.userSelect = 'auto';
  }

  private changeWidth(event: any){
    let nextEl = this.curTh.nextElementSibling;
    if(nextEl.clientWidth <= 25 && event.movementX > 0){
      return;
    }
    if(this.curTh.clientWidth <= 25 && event.movementX < 0){
      return;
    }
    
    if(nextEl.clientWidth - event.movementX < 25){
      this.curTh.style.width = `${this.curTh.clientWidth + (nextEl.clientWidth - 25)}px`;
      nextEl.style.width = `25px`;
      return;
    }

    if(this.curTh.clientWidth + event.movementX < 25){
      nextEl.style.width = `${nextEl.clientWidth + (this.curTh.clientWidth - 25)}px`;
      this.curTh.style.width = `25px`;
      return;
    }
    
    let next = nextEl.clientWidth - event.movementX;
    let cur = this.curTh.clientWidth + event.movementX;
    nextEl.style.width = `${next}px`;
    this.curTh.style.width = `${cur}px`;
  }
}
