
export type TagType = "Online" | "Error" | "Warning";

export interface Sensor {
	id: number;
	sensorID: string;
	date: Date;
	dataValue: number;
	status?: TagType;
}