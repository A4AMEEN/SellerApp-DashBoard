import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NavItem } from '../../interfaces/types';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isDark = true;
  isCollapsed = false;
  isLogut = false
  @Output() sidebarToggled = new EventEmitter<boolean>();
  constructor(private _themeService: ThemeService) {
    this._themeService.isDarkTheme$.subscribe(
      isDark => this.isDark = isDark
    );
  }

  mainNavItems: NavItem[] = [
    {
      path: '#', label: 'Dashboard', svgIcon: `<span class="material-symbols-outlined">
      space_dashboard
      </span>`,
      active: true
    },
    {
      path: '#',
      label: 'Payment',
      svgIcon: `<span class="material-symbols-outlined">credit_card</span>`,
    },
    {
      path: '#', label: 'Customers', svgIcon: `<span class="material-symbols-outlined">
group
</span>` },
    {
      path: '#',
      label: 'Messages',
      svgIcon: `
    <span class="material-symbols-outlined">
tooltip_2
</span>`
    },
  ];

  secondaryNavItems: NavItem[] = [
    {
      path: '#',
      label: 'Product',
      svgIcon: `<span class="material-symbols-outlined">shopping_bag</span>`,
    },
    {
      path: '#', label: 'Invoice', svgIcon: `<span class="material-symbols-outlined">
receipt_long
</span>` },
    { path: '#', label: 'Analytics', icon: 'fas fa-chart-line' },
  ];

  thirdNavItems: NavItem[] = [
    { path: '#', label: 'Settings', icon: 'fas fa-cog' },
    {
      path: '#',
      label: 'Security',
      svgIcon: `<span class="material-symbols-outlined">
security
</span>`,
    },
    {
      path: '#',
      label: 'Help',
      svgIcon: `<span class="material-symbols-outlined">help</span>`,
    },
  ];

  toggleTheme() {
    this._themeService.toggleTheme();
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit(this.isCollapsed);
  }
  handleLogOut() {
    console.log("clicked");

  }
}