import { TRating } from './TRating';
import { TFileUpload } from './TFileUpload';
import { TNote } from './TNote';
import { TComment } from './TComment';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { TGoal } from './TGoal';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TCoreBehaviour extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public goalId: number;
  public goal: TGoal;
  public name: string;
  public description: string;
  public weighting: number;
  public dueDate: string;
  public isChanged: boolean;
  public managerRatingId: number;
  public managerRating: TRating;
  public employeeRatingId: number;
  public employeeRating: TRating;
  public agreedRatingId: number;
  public agreedRating: TRating;
  public managerComment: string;
  public employeeComment: string;
  // @Ignore()
  public coreBehaviourComments: TComment[];

  // @Ignore()
  public fileUploads: TFileUpload[];

  // @Ignore()
  public notes: TNote[];

  public constructor(init?: Partial<TCoreBehaviour>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
