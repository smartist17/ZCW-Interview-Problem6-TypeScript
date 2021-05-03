import { Component } from '@angular/core';
import {Home} from "./home/Home";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boot-Camp-Time';
  home: any;
}
