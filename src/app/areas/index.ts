import { Routes } from "@angular/router";

import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SensorsComponent } from "./sensors/sensors.component";
import { SensorComponent } from "./sensors/sensor.component";
import { ChartsComponent } from "./charts/charts.component";
import { AlertsComponent } from "./alerts/alerts.component";

export const AREAS_ROUTES: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{ path: "sensors", component: SensorsComponent },
	{ path: "chart/:id", component: ChartsComponent },
	{ path: "alerts/:id", component: AlertsComponent },
	{ path: "error", component: ErrorComponent },
	{ path: "**", component: NotFoundComponent },
];

export const AREAS_COMPONENTS = [
	NavComponent,

	// pages
	HomeComponent,
	ErrorComponent,
	NotFoundComponent,
	SensorsComponent,
	SensorComponent,
	ChartsComponent,
	AlertsComponent
];