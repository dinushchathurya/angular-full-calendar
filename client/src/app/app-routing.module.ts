import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AddEventComponent } from './pages/calendar/add-event/add-event.component';


const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'add-event', component: AddEventComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
