import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Horus";
  age = 36;
  img = "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg";
  btnDisabled = "true";
  person = {
    name: "Horus",
    age: 36,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg"
  }
}
