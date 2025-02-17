import { Component, output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  output = '';
  onClickBtn() {
    let name = document.getElementById("name") as HTMLTextAreaElement;
    this.output = name.value;
  }

}
