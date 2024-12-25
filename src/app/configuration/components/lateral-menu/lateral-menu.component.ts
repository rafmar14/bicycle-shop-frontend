import { Component, OnInit } from '@angular/core';
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

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Product',
              icon: 'pi pi-plus',
              command: () => {
                  this.update();
              }
          },
          {
            label: 'Category',
            icon: 'pi pi-plus',
            command: () => {
                this.update();
            }
        },
        {
            label: 'Component',
            icon: 'pi pi-plus',
            command: () => {
                this.update();
            }
        },
        {
            label: 'Combination',
            icon: 'pi pi-plus',
            command: () => {
                this.update();
            }
        }
      ];
  }

  update() {
    
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
  }

  delete() {
      this.messageService.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
  }
}
