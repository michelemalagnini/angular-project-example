import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matRemove } from '@ng-icons/material-icons/baseline';

type Item = {
  id: number;
  label: string;
  purchased: boolean;
  higherPriority: boolean;
};

@Component({
  selector: 'app-shopping-cart',
  imports: [NgIcon],
  viewProviders: [provideIcons({ matRemove })],
  template: `
    <h1>{{ header() }}</h1>
    <ul>
      @for (item of items(); track item.id) {
      <div class="list-item">
        <li>{{ item.id }} - {{ item.label }}</li>
        <button class="btn btn-cancel" aria-label="Delete">
          <ng-icon name="matRemove"></ng-icon>
        </button>
      </div>
      }
    </ul>
  `,
  styles: `
    /* Shopping Cart Component Styles */

    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      margin-bottom: 0.25rem;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .btn {
      padding: 0.25rem 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-cancel {
      background-color: #dc3545;
      color: white;
      transition: background-color 0.2s ease;
    }

    .btn-cancel:hover {
      background-color: #c82333;
    }

    .btn-cancel:focus {
      outline: 2px solid #dc3545;
      outline-offset: 2px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent {
  // header: string = 'Shopping List App - Angular 19';
  header = signal('Shopping List App - Angular 19');
  items = signal<Item[]>([
    {
      id: 1,
      label: '10 Apples',
      purchased: false,
      higherPriority: false,
    },
    {
      id: 2,
      label: '5 Bananas',
      purchased: false,
      higherPriority: false,
    },
  ]);
}
