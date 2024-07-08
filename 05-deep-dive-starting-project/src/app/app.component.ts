import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TrafficComponent, ServerStatusComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
