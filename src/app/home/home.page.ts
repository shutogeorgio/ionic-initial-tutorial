import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'Default statement';

  constructor() {}

  onChangeText() {
    if (this.text === 'changed') {
      this.text = 'chstatementanged';
    } else {
      this.text = 'changed';
    }
  }
}
