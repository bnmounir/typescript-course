import { Model } from "../models/Model";

export abstract class View<T1 extends Model<T2>, T2> {
	public parent: HTMLElement | null;
	regions: { [key: string]: Element } = {};

	constructor(root: string, public model: T1) {
		this.parent = document.getElementById(root);
		this.model.on("change", this.render);
	}

	regionsMap(): { [key: string]: string } {
		return {};
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			/* empty object */
		};
	}
	abstract template(): string;

	bindEvents(fragments: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(":");
			fragments
				.querySelectorAll(selector)
				.forEach((element) =>
					element.addEventListener(eventName, eventsMap[eventKey])
				);
		}
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();

		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);
			if (element) {
				this.regions[key] = element;
			}
		}
	}

	onRender = (): void => {};

	render = (): void => {
		if (this.parent) {
			this.parent.innerHTML = "";
			const templateElement = document.createElement("template");
			templateElement.innerHTML = this.template();
			this.bindEvents(templateElement.content);
			this.mapRegions(templateElement.content);

			this.parent.append(templateElement.content);
			this.onRender();
		} else {
			throw new Error("parent html not found!");
		}
	};
}
