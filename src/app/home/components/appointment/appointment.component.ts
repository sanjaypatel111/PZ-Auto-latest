import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarsMakesModalsYears } from './data';
import { AppointmentDto } from 'src/app/models/appointment/appointment-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  selectedCountry: AppointmentDto[] = [];
  vehicleYears: number[] = [];
  selectday: number[] = [];
  brandlist:AppointmentDto[] = [];
  modellist:AppointmentDto[] = [];
  constructor(public dialog: NgbActiveModal) { }


  ngOnInit(): void {
    this.selectedCountry=CarsMakesModalsYears;
    for (let index = 1990; index <= 2023; index++) {
      this.vehicleYears.push(index);
    }

    for (let day = 1; day <= 31; day++) {
      this.selectday.push(day);
    }
// console.log(this.selectedCountry)

  }

  close() {
    if (this.dialog) {
      this.dialog.close();
    }
  }

  changeyear(year:any ) {    
    this.brandlist = this.selectedCountry.filter(x=>x.start_year == year.target.value);
    console.log( this.brandlist)
  }
  changebrand(modal:any ) {    
    console.log(modal.target.value, modal)
    this.modellist = this.brandlist.filter(x=>x.make == modal.target.value );
    console.log(this.modellist)
  }

  saveRecord() {
    if (this.dialog) {
      this.dialog.close();
    }
    // if (this.dialog) {
    //   this.dialog.close(true);
    // }
  }

}
