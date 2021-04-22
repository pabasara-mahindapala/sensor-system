
export type TagType = "Online" | "Error" | "Warning";

export interface Sensor {
	id: number;
	title: string;
	description?: string;
	url: string;
	tag?: TagType;
}