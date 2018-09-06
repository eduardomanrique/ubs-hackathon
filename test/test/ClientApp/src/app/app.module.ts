import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DndModule } from 'ng2-dnd';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule, MatSidenavModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFlowPageComponent } from './components/add-flow-page/add-flow-page.component';
import { FlowItemComponent } from './components/flow-item/flow-item.component';
import { FlowlistComponent } from './components/flowlist/flowlist.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RuleGroupComponent } from './components/rule-group/rule-group.component';
import { SimpleRuleComponent } from './components/simple-rule/simple-rule.component';
import { ConfirmdialogComponent } from './dialogs/confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    FlowlistComponent,
    FlowItemComponent,
    AddFlowPageComponent,
    RuleGroupComponent,
    SimpleRuleComponent,
    ConfirmdialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    CommonModule,
    HttpModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home' }
    ]),
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
