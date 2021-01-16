import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../../services/api-service.service';
import Swal from 'sweetalert2';
import { Events } from 'src/app/data/events';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions;
  error: any;
  events: Events;
  constructor(
    public http: HttpClient,
    private apiService: ApiServiceService
  ) {}

  handleDateClick(arg) {

  }

  onSelectx(event) {

  }

  ngOnInit() {
    this.getAllEvents();
  }

  deleteEvent(id) {
    this.apiService.deleteSingleEvent(id).subscribe((data: any) => {});
  }

  getAllEvents() {
    this.apiService.getAllEvents().subscribe((data: any) => {
      const self = this;
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        selectable: false,
        editable: false,
        // dateClick: this.handleDateClick.bind(this),
        select: this.handleDateClick.bind(this),
        events: data,
        eventClick(evetData) {
          // tslint:disable-next-line:variable-name
          const event_id = evetData.event._def.extendedProps._id;
          Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            timer: 30000,
          }).then((result) => {
            if (result.value) {
              self.deleteEvent(event_id);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              self.getAllEvents();
            }

          }).catch(() => {
            Swal.fire('Failed!', 'There was something went wrong.');
          });
        }
      };
    });
  }
}
