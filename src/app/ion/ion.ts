import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'ion',
    templateUrl: './ion.html',
    styleUrls: ['./ion.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IonComponent implements OnInit {
    _name: string;
    @Input()
    set name(val: string) {
        this._name = `ion ion-${val}`;
    }
    get name() {
        return this._name;
    }
    constructor() { }

    ngOnInit() { }
}