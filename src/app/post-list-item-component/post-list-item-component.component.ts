import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../post.class';

@Component({
	selector: 'app-post-list-item-component',
	templateUrl: './post-list-item-component.component.html',
	styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
	@Input() post: Post;

	constructor() { }

	ngOnInit() {
	}

}
