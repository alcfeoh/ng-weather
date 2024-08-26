import { Component, inject } from '@angular/core';
import { NotificationService } from 'app/services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);

  get message() {
    return this.notificationService.notification();
  }
}
