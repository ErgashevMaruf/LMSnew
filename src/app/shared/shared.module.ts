import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    declarations:[DropdownComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownComponent
    ]
})
export class SharedModule
{
}
