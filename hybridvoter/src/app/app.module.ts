import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { VoteService } from './vote.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    VoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
