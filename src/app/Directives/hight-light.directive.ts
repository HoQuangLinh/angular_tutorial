import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HightLightDirective implements OnInit {
  @Input() appHighLight = '';
  constructor(private el: ElementRef) {
    console.log('Constructor directive' + this.appHighLight);
  }
  ngOnInit(): void {
    console.log('OnInit directed' + this.appHighLight);
    this.el.nativeElement.style.backgroundColor = this.appHighLight;
  }
}
