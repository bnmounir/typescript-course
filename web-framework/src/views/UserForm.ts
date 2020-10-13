import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			"click:#set-age": this.setRandomAge,
			"click:#set-name": this.setName,
			"click:#save": this.onSave,
		};
	}

	setRandomAge = (): void => {
		let age = Math.floor(101 * Math.random());
		this.model.set({ age });
		this.model.trigger("change");
	};

	setName = (): void => {
		if (this.parent !== null) {
			const input: HTMLInputElement | null = this.parent.querySelector("#name");
			if (input) {
				const name = input.value;
				this.model.set({ name });
				this.model.trigger("change");
			} else {
				return;
			}
		}
	};

	onSave = (): void => {
		this.model.save();
	};

	template(): string {
		return `
    <div>
    <input name="name" id="name" placeholder="${this.model.get("name")}" />
    <button id="set-name">Set Name<button>
    <button id="set-age">Set Random Age<button>
    <button id="save">Save<button>
    </div>
    `;
	}
}
