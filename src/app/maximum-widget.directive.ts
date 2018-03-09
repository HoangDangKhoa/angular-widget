import { Directive, ElementRef, HostListener, Renderer2, Input } from "@angular/core";
declare var $ :any;

@Directive({
    selector: '[maximum]'
})
export class MaximumWidgetDirective {
    @Input() appHighlight: boolean;
    
    constructor(private renderer: Renderer2, private el: ElementRef) {

    }

    @HostListener('click') onclick() {
        let current = $(this.el.nativeElement);
        console.log(this.el.nativeElement.querySelectorAll('grid-stack-item'));

        if(this.el.nativeElement.classList.contains('maximum-widget')) {
            this.renderer.removeClass(this.el.nativeElement, 'maximum-widget');
        } else {
            this.renderer.addClass(this.el.nativeElement, 'maximum-widget');
        }
    }
}