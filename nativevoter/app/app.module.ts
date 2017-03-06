import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { DashboardComponent} from "./dashboard/dashboard.component";
import {VoteService} from "./vote.service";
import {NativeScriptHttpModule} from "nativescript-angular";

// --- The built-in 'nativescript-telerik-ui-pro' modules
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-telerik-ui-pro/calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-telerik-ui-pro/dataform/angular";
// ---

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService,
        VoteService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
