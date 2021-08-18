import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  token:string;
  product: ProductComponent;

  constructor(private http: HttpClient, private shoppingCartService: ShoppingCartService) {
  }

  

  ngOnInit(): void {
    this.token = localStorage.getItem("token");

    this.http.get('https://ikse-api-s1118202.herokuapp.com/api/products').toPromise()
    .then(data => {
      const length = Object.keys(data).length;
      for (let index = 0; index < length; index++) {
        const article = document.getElementsByTagName("article")[0];
        const section = document.createElement("section");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const h5 = document.createElement("h5");
        const button = document.createElement("button");

        button.onclick = () => {          
          this.product = new ProductComponent(data[index].productname, data[index].description, data[index].price);
          this.shoppingCartService.add(this.product);
        };

        img.src = "https://ikse-api-s1118202.herokuapp.com/" + data[index].image;
        h3.innerHTML = data[index].productname;
        p.innerHTML = data[index].description;
        h5.innerHTML = data[index].price;
        button.innerHTML = "Toevoegen";
        button.value = data[index].id;

        if(window.matchMedia("(max-width: 800px)")){
          section.style.width = "100%";
          section.style.margin = "0";
        }
        else{
          section.style.width = "40rem";
          section.style.margin = "2rem";
        }
        section.style.height = "40rem";
        section.style.boxShadow = "0.2rem 0.5rem 2rem";

        figure.style.width = "100%";
        figure.style.height = "50%";
        
        img.style.width = "100%";
        img.style.height = "100%";

        div.style.padding = "1rem";
        div.style.width = "100%";
        div.style.height = "50%";
      
        h3.style.fontWeight = "400";
        h3.style.fontSize = "150%";
        h3.style.color = "var(--lichtblue)";

        p.style.fontSize = "120%";
        p.style.color = "var(--lichtblue)";
        
        h5.style.fontWeight = "400";
        h5.style.color = "var(--pink)";
        h5.style.fontSize = "140%";

        button.style.padding = "1.2rem 1.5rem";
        button.style.marginTop = "2rem";
        button.style.border = "none";
        button.style.backgroundColor = "var(--pink)";
        button.style.color = "var(--white)";

        section.classList.add("product");
        figure.classList.add("product__figure");
        img.classList.add("product__img");
        div.classList.add("product__div");
        h3.classList.add("product__title");
        p.classList.add("product__description");
        h5.classList.add("product__price");

        figure.appendChild(img);

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h5);
        div.appendChild(button);

        section.appendChild(figure);
        section.appendChild(div);

        article.appendChild(section);
      }
    });
  }
}
