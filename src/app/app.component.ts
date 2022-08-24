import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit{
  opened: boolean;
  constructor(private authErvice: AuthService){}

  ngOnInit(){
    this.authErvice.autoLogin();
  }
}
