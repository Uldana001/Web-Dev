import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` Hello {{ city }}, {{ 1 + 1 }}`, // using class property in a template {{}}
})
export class App {
  city = 'San Francisco'; // no need to add string type (type inference in TS)
}
