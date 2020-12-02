import { Note } from './note.model';
import { Period } from './period.model';
import { Rating } from './rating.model';
import { StatusType } from './status-type.model';

	export 	class CoreBehaviour {
		id:number;
		hrGoalId: number;
		hrGoal: {
			finalScore?: number;
			hrGoalStatusId?: number;
			hrGoalStatus: {
				description: string;
			};
			hrPeriodId: number;
			hrPeriod: Period;
			hrCoreBehaviours: any[];
			hrKpis: any[];
		};
		hrStatusTypeId: number;
		hrStatusType: StatusType;
		hrCoreBehaviourTypeId: number;
		hrCoreBehaviourType: {
			name: string;
			description: string;
			weighting: number;
			isDeleted: boolean;
		};
		isCompleted: boolean;
		dateCompleted?: Date;
		managerRatingId?: number;
		managerRating: Rating;
		employeeRatingId?: number;
		employeeRating: Rating;
		agreedRatingId?: number;
		agreedRating: Rating;
		managerComment: string;
		employeeComment: string;
		hrCoreBehaviourComments: any[];
		hrFileUploads: any[];
		hrNotes: Note[];
	}

