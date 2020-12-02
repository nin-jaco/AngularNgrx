import { Period } from './period.model';
import { Rating } from './rating.model';
import { StatusType } from './status-type.model';

	export class Note {
		id:number;
		hrKpiId?: number;
		hrKpi: {
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
			description: string;
			measureBy: string;
			weighting: number;
			hrStatusTypeId: number;
			hrStatusType: StatusType;
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
			fileUploads: any[];
			hrKpiComments: any[];
			hrNotes: any[];
		};
		hrCoreBehaviourId?: number;
		hrCoreBehaviour: {
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
			hrNotes: any[];
		};
		noteText: string;
	}

