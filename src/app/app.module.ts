import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectAllQuesComponent } from './connect-all-ques/connect-all-ques.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectAllQuesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'connectall-qa', component: ConnectAllQuesComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
