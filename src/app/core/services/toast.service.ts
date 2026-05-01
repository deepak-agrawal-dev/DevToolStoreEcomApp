import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})

export class ToastService {
    private snackBar = inject(MatSnackBar);

    success(msg:string){
        this.open(msg,'success');
    }

    error(msg:string){
        this.open(msg,'error');
    }

    info(msg:string){
        this.open(msg,'info');
    }

    /**
   * Success toast.
   */
    private open(msg: string, type: string): void {
        this.snackBar.open(
            msg,
            '✕',
            {
                duration: 2500,
                panelClass: [type],
                horizontalPosition: 'right',
                verticalPosition: 'bottom'
            }
        );
    }
}