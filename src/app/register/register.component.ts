import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private http: HttpClient, private router: Router ) { }

  register(values) {
    const postdata = {
      name: values.name,
      email: values.email,
      password: values.password
    }

    this.http.post('https://ikse-api-s1118202.herokuapp.com/api/register', postdata).toPromise()
    .then(data => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {
  }

}
