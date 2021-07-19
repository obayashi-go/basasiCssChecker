import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssClassCheckRoutingModule } from './css-class-check-routing.module';
import { CssClassCheckComponent } from './css-class-check.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatchCaseLabel } from '../../components/match-case-label';

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
        MatIconModule,
        ReactiveFormsModule
    ],
    declarations: [
        CssClassCheckComponent,
        MatchCaseLabel
    ]
})
export class CssClassCheckModule { }
