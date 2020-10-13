import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
	template(): string {
		return `
      <div>
        <h1>Profile</h1>
        <h3>username: ${this.model.get("name")}</h3>
        <h3>age: ${this.model.get("age")}</h3>
      </div>
    `;
	}
}
