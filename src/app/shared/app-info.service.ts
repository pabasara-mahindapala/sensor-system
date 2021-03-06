import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class AppInfoService {
	title = "Sensor System";
	version = "1.0.0";
	environment = environment.production ? "prod" : "dev";
	isDebug = environment.debug;
}
