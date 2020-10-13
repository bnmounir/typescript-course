import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const collection = new Collection(
	"http://localhost:3000/users",
	(json: UserProps) => User.buildUser(json)
);

collection.on("change", () => {
	const root = document.getElementById("root");
	if (root) {
		new UserList(root, collection).render();
	}
});

collection.fetch();
