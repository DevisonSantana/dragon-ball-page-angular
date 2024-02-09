import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, MenuBarComponent]
})
export class AppComponent {
  title = 'blog-angular';
}
