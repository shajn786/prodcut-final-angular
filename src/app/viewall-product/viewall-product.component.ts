import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent {

  constructor(private api : ApiService)
  
  {
     this.api.fetchProduct().subscribe(
(response)=>
{
console.log(response)
this.data=response
}

     )

  }
  data:any =[]

}
