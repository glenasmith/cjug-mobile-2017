import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { VoteService} from './vote.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
