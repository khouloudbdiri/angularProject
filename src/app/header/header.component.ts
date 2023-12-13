import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService, private cdr: ChangeDetectorRef) {
    
  }
  logout() {
    this.authService.doLogout();
    this.cdr.detectChanges();
  }
}
