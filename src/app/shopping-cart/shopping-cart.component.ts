import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  template: ` <h1>{{ headerSign() }}</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent {
  header: string = 'Shopping List App - Angular 19';
  headerSign = signal('Shopping List App - Angular');
}
