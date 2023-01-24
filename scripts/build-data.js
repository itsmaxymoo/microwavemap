import fs from "fs";
import yaml from "js-yaml";

const input_path = "./data/locations";
const output_path = input_path + ".json";

let input_files = fs.readdirSync(input_path).map(inf => input_path + "/" + inf);
input_files = input_files.map(file => fs.readFileSync(file));

class _Location {
	constructor(building, room_exact, room_approx, coords){
		this.building = building;
		this.room_exact = room_exact;
		this.room_approx = room_approx;
		
		let coordArray = coords.split(/\s*,\s*/);

		this.lat = parseFloat(coords[0]);
		this.lng = parseFloat(coords[1]);
	}
}

let locationArray = [];

input_files.forEach((file) => {
	let data = yaml.load(file);

	let location = new _Location(
		data["building"],
		data["room_exact"],
		data["room_approx"],
		data["coords"]
	);

	locationArray.push(location);
});

fs.writeFileSync(output_path, JSON.stringify(locationArray, undefined, "    "));