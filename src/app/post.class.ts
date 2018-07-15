export class Post {
	title: string;
	content: string;
	loveIts: number;
	created_at: Date;

	constructor(title:string, content:string){
		this.title = title;
		this.content = content;
		this.loveIts = 0;
		this.created_at = new Date();
	}

	love(loveValue:number){
		this.loveIts += loveValue;
	}
}