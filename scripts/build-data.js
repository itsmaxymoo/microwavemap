import fs from "fs";
import yaml from "js-yaml";
import path from "path";

const input_path = "./data/locations";
const output_path = input_path + ".json";

let input_files = fs.readdirSync(input_path).map(inf => input_path + "/" + inf);

class _Location {
	constructor(id, building, room_exact, notes, coords, access = "public") {
		this.id = id;
		this.building = building;
		this.room_exact = room_exact;
		this.notes = notes;

		let coordArray = coords.split(/\s*,\s*/);

		this.lat = parseFloat(coordArray[0]);
		this.lng = parseFloat(coordArray[1]);

		this.access = access;
	}
}

let locationArray = [];

input_files.forEach((file) => {
	let _file = fs.readFileSync(file);
	let data = yaml.load(_file);

	if (data["output"] === "false") {
		return;
	}

	let location = new _Location(
		path.basename(file).slice(0, -4),
		data["building"],
		data["room_exact"],
		data["notes"],
		data["coords"],
		data["access"]
	);

	locationArray.push(location);
});

fs.writeFileSync(output_path, JSON.stringify(locationArray, undefined, "    "));