import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material';
import { ActionPopComponent } from '../action-pop/action-pop.component';
import * as moment from 'moment';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date(),
     color: 'red', textColor: 'blue', end: '2019-08-14T15:30:00', allDay: false, },
    { title: 'Event Now', start: '2019-08-12T15:30:00', color: 'red', textColor: 'blue' },
  ];
  test: any;
  top: any;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  handleDateClick(arg) {
    if (arg.date > new Date()) {
      // This allows today and future date
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        });
      }
  } else {
      alert('Please select date grater than current date ');
  }
  }
  eventClick(event) {
    const dialogRef = this.dialog.open(ActionPopComponent, {
      position: {
        top: `${event.jsEvent.clientY}px`,
        left: `${event.jsEvent.clientX}px`,
      },
      backdropClass: 'remove_bg',
      panelClass: 'reduce_width',
    });
  }
}
