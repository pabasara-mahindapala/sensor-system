import { Component } from "@angular/core";
import { Sensor } from "./sensors.model";

@Component({
	selector: "app-sensors",
	templateUrl: "./sensors.component.html",
	styleUrls: ["./sensors.component.scss"],
})
export class SensorsComponent {
	sensors: Sensor[] = [
		{
			id: 1,
			title: "Outdoor Temperature",
			tag: "Online",
			url: "https://github.com/sketch7/ssv-core",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		},
		{
			id: 2,
			title: "Boiler 1 Temp",
			tag: "Error",
			url: "https://github.com/sketch7/signalr-client",
			description: "Vestibulum porttitor urna lectus, bibendum sodales augue mattis et",
		},

		{
			id: 3,
			title: "Boiler 2 Temp",
			tag: "Online",
			url: "https://github.com/sketch7/ngx.command",
			description:
				"Donec mi velit, rhoncus at dolor luctus, fermentum vehicula ex",
		},
		{
			id: 4,
			title: "Pipe Temperature",
			tag: "Warning",
			url: "https://github.com/sketch7/angular-skeleton-app",
			description: "Vestibulum ultrices odio in mauris lobortis, eget posuere arcu malesuada",
		},
		// {
		// 	key: "ng2-heroes",
		// 	title: "ng2 heroes app",
		// 	tag: "Warning",
		// 	url: "https://github.com/sketch7/ng2-heroes",
		// 	description: "angular2 heroes sample application",
		// },

		// {
		// 	key: "ssv-au-core",
		// 	title: "@ssv/au-core",
		// 	tag: "Online",
		// 	url: "https://github.com/sketch7/ssv-au-core",
		// 	description: "Core components, utilities and services for Aurelia by Sketch7",
		// },
		// {
		// 	key: "ssv-au-ui",
		// 	title: "@ssv/au-ui",
		// 	tag: "Online",
		// 	url: "https://github.com/sketch7/ssv-au-ui",
		// 	description: "UI components library for Aurelia by Sketch7",
		// },

		// {
		// 	key: "fluently-http-client",
		// 	title: "Fluently Http Client",
		// 	tag: "Error",
		// 	url: "https://github.com/sketch7/FluentlyHttpClient",
		// 	description: "Http Client for .NET Standard with fluent APIs which are intuitive, easy to use and also highly extensible.",
		// },
	];
}
