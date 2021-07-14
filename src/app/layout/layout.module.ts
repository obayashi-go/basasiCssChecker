import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import {
//   MatButtonModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule, MatProgressBarModule,
//   MatSidenavModule,
//   MatToolbarModule
// } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HeaderComponent } from '../components/header/header.component';
import { SidNaviComponent } from '../components/sid-navi/sid-navi.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    TranslateModule
  ],
  declarations: [ LayoutComponent, HeaderComponent, SidNaviComponent ]
})
export class LayoutModule {}
