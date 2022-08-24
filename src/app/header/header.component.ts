import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Output() toggleSidebar = new EventEmitter<void>();
  isAuthenticated = false;
  linksTitles = ['RECIPES','SHOPPING LIST'];
  links = ['/recipes','/shopping-list'];
  activeLink = this.linksTitles[0];
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}



  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  onToggleSidebar(){
    this.toggleSidebar.emit();
  }
}
