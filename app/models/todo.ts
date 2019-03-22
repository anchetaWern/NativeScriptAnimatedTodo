import { EventData, Observable } from "data/observable";

class Todo extends Observable {
	text: string;
	completed: boolean = false;
	is_new: boolean = true;
	is_removed: boolean = false;

	constructor(
		text: string,
		completed: boolean = false,
		is_new: boolean = true,
		is_removed: boolean = false
	) {
		super();

		this.text = text;
		this.completed = completed;
		this.is_new = is_new;
		this.is_removed = is_removed;
	}
}

export default Todo;
