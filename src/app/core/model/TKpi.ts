import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { TComment } from './TComment';
import { TGoal } from './TGoal';
import { TRating } from './TRating';
import { TFileUpload } from './TFileUpload';
import { TNote } from './TNote';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TKpi extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public goalId: number;
  public goal: TGoal;
  public description: string;
  public measureBy: string;
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
  public fileUploads: TFileUpload[];

  // @Ignore()
  public comments: TComment[];

  // @Ignore()
  public notes: TNote[];

  public constructor(init?: Partial<TKpi>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
