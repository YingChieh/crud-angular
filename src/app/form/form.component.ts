import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Info } from '../info';
import { TableComponent } from '../table/table.component';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from '../table/table.service';

@Component({
    providers: [TableComponent],
    selector: 'app-form',
    templateUrl: './form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    elementForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
    });

    @Input() oldInfo: Info;
    @Output() display: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _tableService: TableService, private fb: FormBuilder) { }

    ngOnInit() {
        this.elementForm.setValue({
            title: this.oldInfo.title,
            description: this.oldInfo.description
        });
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        if (this.oldInfo.title === '') {
            // add element
            this._tableService.addItem(this.elementForm.value);
        } else {
            // edit element
            this._tableService.updateItem(this.elementForm.value, this.oldInfo);
        }

        this.display.emit(false);            //form component becomes invisible
    }
}