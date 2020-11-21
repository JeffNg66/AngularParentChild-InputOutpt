import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

import { FormsModule } from '@angular/forms';   // Step 1 of 6 Parent-to-Child

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule         // Step 1 of 6 Parent-to-Child
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
