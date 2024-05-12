import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleTableComponent } from '../people-table';
import { CommonModule } from '@angular/common';
import { DaraSharingServiceService } from '../../services/dara-sharing.service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  standalone: true,
  imports:  [MatToolbarModule, MatIconModule, MatDialogModule, CommonModule]
})
export class ToolbarComponent {

  $subscription: Subscription;
  constructor(
    private dialog: MatDialog,
    private service: DaraSharingServiceService
  ) {
    this.$subscription = service.getAsyncData().subscribe((prop) => {
      console.log(prop);
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeopleTableComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
  }
}
