import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent {

  public heroForm = new FormGroup ({
    id: new FormControl(''),
    superhero: new FormControl('', Validators.required),
    publisher: new FormControl(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    character: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' }
  ]

}
