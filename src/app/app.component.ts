import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent, ContentComponent, DataTableComponent,RouterOutlet,NavComponent],
  // template: `
  //   <div class="container">
  //     <app-nav></app-nav>
  //     <app-header></app-header>
  //     <app-content></app-content>
  //     <router-outlet></router-outlet>
  //     <app-data-table></app-data-table>
  //     <app-footer></app-footer>
  //   </div>
  // `,
})
export class AppComponent {
  title = 'newproject';
}
