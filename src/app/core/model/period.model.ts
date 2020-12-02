import { QuarterType } from './quarter-type.model';

	export class Period {
		id:number;
		name: string;
		startDate: Date;
		endDate: Date;
		hrQuarterTypeId: number;
		hrQuarterType: QuarterType;
		year: number;
		employeeId?: number;
		employee: {
			managerId: number;
			manager: any;
			employeeId: number;
			employee: any;
		};
		managerId?: number;
		manager: {
			managerId: number;
			manager: any;
			employeeId: number;
			employee: any;
		};
		isDeleted: boolean;
		hrGoals: any[];
	}

