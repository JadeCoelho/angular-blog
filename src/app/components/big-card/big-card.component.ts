import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() bigImg!: string
  bigTitle: string = 'Título da notícia do big card'
  bigDesc: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatura impedit ducimus eaque sequi quam dolorum consequuntur esse debitis doloremque.'
  @Input() id: string = "0"
}
