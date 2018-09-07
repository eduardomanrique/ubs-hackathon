import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddFlowPageComponent } from './components/add-flow-page/add-flow-page.component';
import { FlowItemComponent } from './components/flow-item/flow-item.component';
import { FlowlistComponent } from './components/flowlist/flowlist.component';
import { RuleGroupComponent } from './components/rule-group/rule-group.component';
import { SimpleRuleComponent } from './components/simple-rule/simple-rule.component';
import { ApistepComponent } from './components/apistep/apistep.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowlistComponent,
    FlowItemComponent,
    AddFlowPageComponent,
    RuleGroupComponent,
    SimpleRuleComponent,
    ApistepComponent
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
      { path: '**', redirectTo: 'home' }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
