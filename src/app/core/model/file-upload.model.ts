import { CoreBehaviour } from './core-behaviour.model';
import { Note } from './note.model';
import { Period } from './period.model';
import { Rating } from './rating.model';
import { StatusType } from './status-type.model';

	export class FileUpload {
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
				hrCoreBehaviours: CoreBehaviour[];
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
			hrNotes: Note[];
		};
		hrCoreBehaviourId?: number;
		hrCoreBehaviour: CoreBehaviour;
		filename: string;
		fileData: any[];
	}

