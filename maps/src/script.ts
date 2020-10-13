import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const usr = new User();
const company = new Company();

const map = new CustomMap(usr.location, "map");
console.log(map);

map.addMarker(company);
map.addMarker(usr);
