export type CountdownType = {
	_id: string;
	title: string;
	dateTime: Date;
	zone: string;
};

export type ServerCountdownType = {
	_id: string;
	title: string;
	dateTime: string;
	zone: string;
};

export type ServerCountdownsType = Array<ServerCountdownType>;

export type DurationLeftType = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	negative: boolean;
};
