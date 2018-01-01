import {
    Component, OnInit, ViewEncapsulation,
    Input, Output, EventEmitter
} from '@angular/core';

@Component({
    selector: 'meepo-icon',
    templateUrl: './meepo-icon.html',
    styleUrls: ['./meepo-icon.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MeepoIconComponent implements OnInit {
    @Input() width: number = 0;
    @Input() height: number = 0;
    @Input() color: string = '#ccc';
    @Input() src: MeepoIconSrc = {
        src: 'assets/like.svg',
        config: {
            default: 'assets/like.svg',
            active: 'assets/like_full.svg'
        },
        active: false
    }
    @Output() click: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    _click(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this.src.active = !this.src.active;
        if (this.src.active) {
            this.src.src = this.src.config.active;
        } else {
            this.src.src = this.src.config.default;
        }
        this.click.next(this.src.active);
    }
}

export interface MeepoIconSrcConfig {
    default: string;
    active: string;
}

export interface MeepoIconSrc {
    src: string;
    config: MeepoIconSrcConfig;
    active: boolean;
}