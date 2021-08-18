import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private http: HttpClient, private router: Router) {}

  login(values) {
    const postdata = {
      email: values.email,
      password: values.password
    }

    this.http.post('http://127.0.0.1:8000/api/login', postdata).toPromise()
    .then(data => {
      const token = JSON.stringify(data)
      const token_split = token.split("|");
      let clean_token = token_split[1];
      clean_token = clean_token.replace("\"}", "");
      localStorage.setItem("token", "Bearer " + clean_token);

      const headers = new HttpHeaders({
        'Authorization': "Bearer " + clean_token,
      });
      
      this.http.get('http://127.0.0.1:8000/api/user', {headers: headers}).toPromise().then(data =>{
        localStorage.setItem("role", data["role"]);
        location.reload();
      });
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem("role") == "Admin" || localStorage.getItem("role") == "User"){
      this.router.navigate(['/producten']);
    }
  }

}
