import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  man_date=""
  exp_date=""
  brand=""
  price=""
  sellername=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any ={"name":this.name,"man_date":this.man_date,"exp_date":this.exp_date,"brand":this.brand,"price":this.price,"sellername":this.sellername}
    console.log(data)
    this.api.addProduct(data).subscribe(
   (response:any)=>
   {
    console.log(response)
   }

    )
  }


}
