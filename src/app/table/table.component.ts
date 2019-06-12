import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Info } from '../info';
import { TableService } from './table.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input() showForm: boolean;
    @Output() display: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() showDetails: boolean;
    @Output() displayDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output() selectedElement: EventEmitter<Info> = new EventEmitter<Info>();
    selected: Info;

    private subscription: Subscription;

    constructor(private _tableService: TableService) {
    }

    ngOnInit() {
    }

    deleteElement(data) {
        //TODO: Delete element here
        this._tableService.removeItem(data);
        this.ngOnInit();
    }

    toggleForm() {
        this.selectedElement.emit({ title: '', description: '' });
        this.display.emit(!this.showForm);  //form component becomes visible/invisible
        this.displayDetails.emit(false);    //details component becomes invisible
    }

    onSelect(info: Info): void {
        this.selectedElement.emit(info);
        this.selected = info;
        this.displayDetails.emit(true);
        this.display.emit(false);
    }
}
