import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    name: string;
    jobTitle: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.jobTitle = faker.name.jobTitle();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return this.jobTitle;
    }
}
