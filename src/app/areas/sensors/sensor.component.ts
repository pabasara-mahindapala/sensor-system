import { Component, Input } from "@angular/core";

import { Sensor } from "./sensors.model";

@Component({
	selector: "app-sensor",
	templateUrl: "./sensor.component.html",
	styleUrls: ["./sensor.component.scss"],
})
export class SensorComponent {
	@Input() sensor: Sensor | undefined;
}
