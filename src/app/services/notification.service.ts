import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSignal: WritableSignal<string | null> = signal(null);

  get notification() {
    return this.notificationSignal.asReadonly();
  }

  showError(message: string) {
    this.notificationSignal.set(message);
    setTimeout(() => {
      this.notificationSignal.set(null);
    }, 3000); // Notification disappears after 3 seconds
  }
}
