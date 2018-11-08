import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-web-form',
  templateUrl: './web-form.component.html',
  styleUrls: ['./web-form.component.css']
})
export class WebFormComponent implements OnInit {

  public hero : Hero;

  constructor() { }

  ngOnInit() {
    this.hero = new Hero();
  }

}