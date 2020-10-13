import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
	/* @override */
	regionsMap(): { [key: string]: string } {
		return {
			userShow: ".user-show",
			userForm: ".user-form",
		};
	}

	template(): string {
		return `
      <div>
      <div id="user-show"></div>
      <div id="user-form"></div>
      </div>
    `;
	}

	onRender = (): void => {
		new UserShow("user-show", this.model).render();
		new UserForm("user-form", this.model).render();
	};
}
