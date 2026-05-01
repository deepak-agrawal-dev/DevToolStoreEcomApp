import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-checkout-dialog',
  imports: [MatTabsModule],
  templateUrl: './checkout-dialog.html',
  styleUrl: './checkout-dialog.scss',
})
export class CheckoutDialog {
  selectedTab = 'upi';

  constructor(
    private dialogRef:
      MatDialogRef<CheckoutDialog>
  ) {}

  close(): void {
    this.dialogRef.close(false);
  }

  pay(): void {
    this.dialogRef.close(true);
  }
}
