import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssClassCheckRoutingModule } from './css-class-check-routing.module';
import { CssClassCheckComponent } from './css-class-check.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    CssClassCheckRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    // MatExpansionModule,
    // MatIconModule,
    // MatSlideToggleModule,
    // MatPaginatorModule
    ReactiveFormsModule
  ],
  declarations: [CssClassCheckComponent]
})
export class CssClassCheckModule { }
