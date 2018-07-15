import { Component } from '@angular/core';
import {Post} from './post.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	posts = [
		new Post("Mon premier post","Un article de qualité."),
		new Post("Mon deuxième post", "Un article naze."),
		new Post("Encore un post", "Un autre article.")
	];
}


