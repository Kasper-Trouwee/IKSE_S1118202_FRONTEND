import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop-routes';
  @Input() public role: string = localStorage.getItem("role");

  logout(){
    localStorage.setItem("token", null);
    localStorage.setItem("role", null);
    location.replace("/login");
  }
}
