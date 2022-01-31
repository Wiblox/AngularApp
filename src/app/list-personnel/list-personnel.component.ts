import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Person} from "../model/Person";
import {ListPersonnelService} from "../partage/service/list-personnel.service";


@Component({
  selector: 'app-service',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  personnel: Person[] = [];
  dialogStatus = 'inactive';
  view = 'card';

  constructor( private readonly listPersonnelService: ListPersonnelService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {

  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.listPersonnelService.fetch().subscribe(personnel => {
      this.personnel = personnel || [];
    });
  }


  switchView() {
    this.view = this.view === 'card' ? 'list' : 'card';
  }

}
