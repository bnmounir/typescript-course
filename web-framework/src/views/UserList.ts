import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: User, itemParent: Element): void {
		itemParent.id = "parent";
		console.log(document.getElementById("parent"));

		new UserShow("parent", model).render();
	}
}
