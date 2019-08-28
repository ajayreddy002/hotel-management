import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenuList() {
    const menuList: MenuItem[] = [
      {
        group: { route: 'home/dashboard', name: 'Dashboard', image: '../../../../assets/imges/icons/dashboard.svg' },
        menus: []
      },
      {
        group: { route: 'home/settings', name: 'Settings', image: '../../../../assets/imges/icons/gear.svg' },
        menus: []
      },
      {
        group: { route: 'home/calendar', name: 'Calendar', image: '../../../../assets/imges/icons/classroom.svg' },
        menus: []
      },
      {
        group: { route: 'home/hrpayroll', name: 'Hr & Payroll', image: '../../../../assets/imges/icons/hr-icon.svg' },
        menus: [
          { route: '', name: 'ViewAll', image: '' },
          { route: 'addteacher', name: 'Add Teacher', image: '' },
          { route: 'addstudent', name: 'Add Student', image: '' },
          { route: 'addparent', name: 'Add Parent', image: '' }
        ]
      },
      {
        group: { route: 'home/management', name: 'Management', image: '../../../../assets/imges/icons/management.svg' },
        menus: []
      }
    ];
    return menuList;
  }

  getSubMenuName(menuCode: string) {
    const menuList = this.getMenuList();
    for (const group of menuList) {
      for (const menu of group.menus) {
        return ` > ${menu.name}`;
      }
    }
    return '';
  }
}

export interface MenuItem {
  group: Menu;
  menus: Menu[];
}

export interface Menu {
  route: string;
  name: string;
  image: string;
}
