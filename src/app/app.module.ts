import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableService } from './table/table.service';


@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        FormComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [TableService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
