import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedImg: File = null;
  onFileSelected(event){
    this.selectedImg = event.target.files[0];
  }

  create(values){

    let postdata: FormData = new FormData();

    postdata.append('image', this.selectedImg);
    postdata.append('productname', values.productname);
    postdata.append('description', values.description);
    postdata.append('price', values.price);

    console.log(this.selectedImg);
    

    const headers = new HttpHeaders({
        'Authorization': localStorage.getItem("token"),
    });
    
    

    this.http.post('http://127.0.0.1:8000/api/products/create', postdata, {headers: headers})
    .subscribe(res => {
      console.log("Het werkt");
    });
  }
}
