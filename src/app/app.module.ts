import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar-component';
import {EventService} from './events/shared/event-service';
import { ToastrService } from "./common/toastr.service";
import {EventDetailsComponent } from "./events/event-details/event-details.component"
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/shared/create-event.component";
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';



@NgModule({
  imports:[
   BrowserModule,
   RouterModule.forRoot(appRoutes),
   AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,  
    CreateEventComponent,
    Error404Component ,
    NavBarComponent,   
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
