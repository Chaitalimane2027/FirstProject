//For component decorator, we need to import it:
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event-service";
import { ToastrService } from "../common/toastr.service"

declare let toastr: any
//It needs decorator class 
@Component({
    //we should use string literals to read and write multi line HTML easily
    //double braces in hr represnts interpolation/one way binding
    //whatever you put inside below double braces, angular will look for that object on component
    template: `
    <div>
      <h1>Upcoming Angular events</h1>
      <hr/>
      <div class="row">
         <div *ngFor= "let event of events" class="col-md-5">
           <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>  
         </div>  
      </div>
    </div>
 `
})

export class EventListComponent implements OnInit {
     events!: any[];
     
     constructor(private eventService: EventService, private toastr: ToastrService){
        
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName: any){
        this.toastr.success(eventName)

    }
        
}