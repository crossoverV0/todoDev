import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from "../../components/molecules/todo-card/todo-card.component";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    imports: [CommonModule, TodoCardComponent]
})
export class TodoListComponent {

}
