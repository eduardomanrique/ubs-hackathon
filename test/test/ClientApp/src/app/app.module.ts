import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatSelectModule,
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    FlowlistComponent,
    FlowItemComponent,
    AddFlowPageComponent,
    RuleGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
