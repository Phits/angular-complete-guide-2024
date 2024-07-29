import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // Modern Destroy Method
  private destroyRef = inject(DestroyRef);

  // private interval?: NodeJS.Timeout;
  // Advanced TS
  // private interval?: ReturnType<typeof setTimeout>;

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd > 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    })
  }

  ngAfterViewInit() {
    console.log('ServerStatusComponent ngAfterViewInit');
  }

  // Old Destroy Method
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

}
