import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SlidingBtnComponent } from './sliding-btn/sliding-btn.component';
import { DividerComponent } from './divider/divider.component';
@NgModule({
    declarations: [DropdownComponent, SlidingBtnComponent, DividerComponent],
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
        DropdownComponent,
        SlidingBtnComponent,
        DividerComponent
    ]
})
export class SharedModule {
}
