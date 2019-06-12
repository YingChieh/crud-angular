import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../info';
import { TableComponent } from '../table/table.component';

@Component({
    providers: [TableComponent],
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    @Input() info: Info;

    @Input() showForm: boolean;
    @Output() display: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() showDetails: boolean;
    @Output() displayDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private table: TableComponent) {
    }

    ngOnInit() {
    }

    toggleForm() {
        this.display.emit(true);            //form component becomes visible
        this.displayDetails.emit(false);    //details component becomes invisible
    }

    confirmDelete() {
        if (confirm("Are you sure you want to delete this element?")) {
            this.deleteCol();               //delete this element
            this.displayDetails.emit(false);//details component becomes invisible
        }
    }

    deleteCol() {
        this.table.deleteElement(this.info);
    }
}
