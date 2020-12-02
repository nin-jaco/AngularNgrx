import { FileUpload } from './file-upload.model';
import { Goal } from './goal.model';
import { Note } from './note.model';
import { Rating } from './rating.model';
import { StatusType } from './status-type.model';

	export class Kpi  {
		id:number;
		hrGoalId: number;
		hrGoal: Goal;
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
		fileUploads: FileUpload[];
		hrKpiComments: any[];
		hrNotes: Note[];
	}

