import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  token: string;
  id: number;
  form: FormGroup;

  constructor( private http: HttpClient, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.id = parseInt(localStorage.getItem("edit_id"));

    const postdata = {
      id: this.id,
    }

    this.http.get('http://127.0.0.1:8000/api/product/' + this.id)
    .subscribe(res => {
      console.log(res);

      this.form = this.fb.group({
        "productname": new FormControl(res["productname"]),
        "description": new FormControl(res["description"]),
        "price": new FormControl(res["price"]),
      });
    });
  }

  update(){
    const postdata = {
      id: this.id,
      productname: this.form.value["productname"],
      description: this.form.value["description"],
      price: this.form.value["price"]
    }

    const headers = new HttpHeaders({
      'Authorization': this.token,
    });
    
    this.http.put('http://127.0.0.1:8000/api/products/update', postdata, {headers: headers})
    .subscribe(res => {
      location.replace("/producten/bewerken");
    });
  }

  delete(){
    const postdata = {
      id: this.id
    }

    const headers = new HttpHeaders({
      'Authorization': this.token,
    });

    
    
    this.http.delete('http://127.0.0.1:8000/api/products/delete/' + this.id, {headers: headers}).toPromise()
    .then(data => {
      location.replace("/producten/bewerken");
    });
  }
}
