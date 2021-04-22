
export type TagType = "Online" | "Error" | "Warning";

export interface Sensor {
	key: string;
	title: string;
	description?: string;
	url: string;
	tag?: TagType;
}