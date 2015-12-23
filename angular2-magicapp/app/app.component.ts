import {Component, View} from 'angular2/core';

@Component({
    selector: 'my-app'
})
@View({
	templateUrl: './templates/todo-list-template.html',
	styleUrls: ['../styles/todo-list-style.css']
})
export class AppComponent {	
    listTitle: string;
	constructor() {
		this.listTitle = "My Todo List";
	}
}