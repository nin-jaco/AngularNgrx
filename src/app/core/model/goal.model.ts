import { CoreBehaviour } from './core-behaviour.model';
import { Period } from './period.model';

	export class Goal {
		id:number;
		finalScore?: number;
		hrGoalStatusId?: number;
		hrGoalStatus: {
			description: string;
		};
		hrPeriodId: number;
		hrPeriod: Period;
		hrCoreBehaviours: CoreBehaviour[];
		hrKpis: any[];
	}
