import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Model } from "./Model";
import { Collection } from "./Collection";

export interface UserProps {
	name?: string;
	age?: number;
	id?: number;
}

const usersUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		console.log("U was called");
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(usersUrl)
		);
	}

	static buildUserCollection(): Collection<User, UserProps> {
		console.log("C was called");
		return new Collection<User, UserProps>(usersUrl, (json: UserProps) =>
			User.buildUser(json)
		);
	}
}
