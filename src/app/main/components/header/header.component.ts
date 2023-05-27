import { Component, OnInit , Renderer2, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { StorageService } from 'src/app/core/service/storage.service';


@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  UserRoles= UserRoles
  constructor(public _authService: AuthService,
     public storageService: StorageService,   
      private _router: Router,
      private renderer: Renderer2, 
      private el: ElementRef
    ) {}

  ngOnInit(): void {}
  logout() {
    this._authService.logout();
  }
  
 
}
