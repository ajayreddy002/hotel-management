import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-action-pop',
  templateUrl: './action-pop.component.html',
  styleUrls: ['./action-pop.component.scss']
})
export class ActionPopComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ActionPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
