import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
	set(value: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}
interface Event {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface HasId {
	id?: number;
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Event,
		private sync: Sync<T>
	) {}
	get on() {
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}
	get get() {
		return this.attributes.get;
	}

	set(update: T): void {
		this.on("change", () => console.log("set attributes was called"));
		this.attributes.set(update);
		this.trigger("change");
	}

	fetch(): void {
		const id = this.get("id");
		if (typeof id !== "number") {
			throw new Error("attribute ID was not properly defined!");
		} else {
			this.sync.fetch(id).then((res: AxiosResponse): void => {
				this.set(res.data);
			});
		}
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((res: AxiosResponse): void => this.trigger("save"))
			.catch(() => this.trigger("error"));
	}
}
