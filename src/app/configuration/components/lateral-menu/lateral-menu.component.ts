import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem, MessageService } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-lateral-menu',
  standalone: true,
  imports: [Menu, ToastModule],
  templateUrl: './lateral-menu.component.html',
  styleUrl: './lateral-menu.component.scss',
  providers: [MessageService]
})
export class LateralMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Product',
              icon: 'pi pi-plus',
              command: () => {
                this.router.navigate(['/products']);
            }
          },
          {
            label: 'Category',
            icon: 'pi pi-plus',
            command: () => {
                this.router.navigate(['/categories']);
            }
        },
        {
            label: 'Component',
            icon: 'pi pi-plus',
            command: () => {
                this.router.navigate(['/components']);
            }
        },
        {
            label: 'Combination',
            icon: 'pi pi-plus',
            command: () => {
                this.router.navigate(['/combinations']);
            }
        }
      ];
  }
}
