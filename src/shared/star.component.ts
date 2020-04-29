import { Component, Input} from '@angular/core';
@Component({
    selector: 'sz-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    ngOnInit(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}