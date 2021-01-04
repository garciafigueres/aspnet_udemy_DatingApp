import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';

  // Propiedades necesarias en nuestras peticiones
  users: any;

  // Inyección de dependencias de HttpClient
  constructor(private http: HttpClient) {}
  
  // Función necesaria para implementar OnInit
  // Aquí llamamos a las funciones para realizar nuestra petición
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => { this.users = response; },
      error => { console.log(error); }
    )
  }

}

