import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasId {
	id?: number;
}

export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;
		console.log("this id is: ", id);
		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(`${this.rootUrl}`, data);
		}
	}
}