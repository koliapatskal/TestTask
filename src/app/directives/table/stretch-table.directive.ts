import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'table[appStretchTable]'
})
export class StretchTableDirective {
  private curTh!: any;
  private mouseMoveFunc!: any;

  constructor(private el: ElementRef) { }

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
