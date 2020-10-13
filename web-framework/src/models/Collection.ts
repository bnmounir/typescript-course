import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T1, T2> {
	models: T1[] = [];
	events: Eventing = new Eventing();

	constructor(
		public urlEndpoint: string,
		public deserialize: (json: T2) => T1
	) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		this.on("fetch", () => console.log("fetch was called"));
		axios
			.get(this.urlEndpoint)
			.then((response: AxiosResponse) => {
				response.data.forEach((value: T2) => {
					this.models.push(this.deserialize(value));
				});
			})
			.then(() => this.trigger("fetch"))
			.catch(() => {
				throw new Error("could not fetch collection properly!");
			});
	}
}
