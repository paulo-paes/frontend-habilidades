import { Component, Input } from '@angular/core';

@Component({
    selector: 'cat-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

    @Input() text = '';
}