import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem, MenuServiceService, Menu } from '../../service/menu-service.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  menuGroupSelected: string;
  menuList: MenuItem[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuServiceService,
    private authService: AuthService
  ) {
    this.menuList = this.menuService.getMenuList();
  }

  selectMenu(menuGroup: Menu) {
    if (this.menuGroupSelected === menuGroup.route) {
      this.menuGroupSelected = null;
      return;
    }
    this.menuGroupSelected = menuGroup.route;
  }
  logout() {
    this.authService.logout();
  }
}
