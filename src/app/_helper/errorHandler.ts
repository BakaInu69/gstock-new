import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
export function errorHandler(err, cb?) {
    console.log(err);
    const status = err.status;
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        alert('An error occurred:' + err.error.message);
    } else {
        const errMsg = err.error || err.json().message;
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        alert(`Backend returned code ${status}, body was: ${errMsg}`);
    }
    if (cb) { cb(); }

}
