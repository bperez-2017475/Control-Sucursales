import { Component, OnInit } from '@angular/core';
import { eventModel } from 'src/app/models/event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventRestService} from 'src/app/services/eventRest/event-rest.service';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  events: any;
  event: eventModel;
  role: any;
  idH : any;

  constructor(
    public activateRoute : ActivatedRoute,
    public userRest: UserRestService,
    public eventRest: EventRestService,
  ) { 
    this.event = new eventModel('','','',new Date(),new Date(),'',[],0,'');
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((idHo:any)=>{
      this.idH =idHo.get('idH');
    });
    this.getEvents()
  }

  getEvents(){
    this.eventRest.getEvents(this.idH).subscribe({
      next:(res:any)=>{
        this.events= res.events
      },
      error:(err)=>{
        console.log(err.error.message || err.error)
      }
    })
  };
}