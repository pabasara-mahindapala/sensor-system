import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Sensor } from "./sensors.model";

@Component({
	selector: "app-sensors",
	templateUrl: "./sensors.component.html",
	styleUrls: ["./sensors.component.scss"],
})
export class SensorsComponent {
	sensorResponse: any;
	sensors: Sensor[] = [];

	constructor(private http: HttpClient) {
		this.getSensors();
	}

	getSensors() {
		// this.http.get("http://localhost:8080/api/v1/sensors").subscribe(result => {
		// 	this.sensorResponse = result;
		// 	this.sensorResponse.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
		// 	for (var s in this.sensorResponse) {				
		// 		if (!this.sensors.find(x => x.sensorID == this.sensorResponse[s].sensorID)) {
		// 			this.sensors.push({
		// 				id: this.sensorResponse[s].id,
		// 				sensorID: this.sensorResponse[s].sensorID,
		// 				date: this.sensorResponse[s].date,
		// 				dataValue: this.sensorResponse[s].dataValue,
		// 				status: this.sensorResponse[s].status
		// 			});
		// 		}

		// 	}
		// });
		this.sensors = [
			{
				id: 6,
				sensorID: "test",
				date: new Date(),
				dataValue: 60,
				status: "Online",
			},
			{
				id: 5,
				sensorID: "test 2",
				date: new Date(),
				dataValue: 50,
				status: "Warning",
			}];

		console.log(this.http);
	}
}
