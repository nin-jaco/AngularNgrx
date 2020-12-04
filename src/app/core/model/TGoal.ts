import { TCoreBehaviour } from './TCoreBehaviour';
import { TGoalStatus } from './TGoalStatus';
import { TUserWithManager } from './TUserWithManager';
import { TKpi } from './TKpi';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TGoal extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @Required()
  public name: string;

  public goalStatusId: number;
  public goalStatus: TGoalStatus;
  public userWithManagerId: number;
  public userWithManager: TUserWithManager;
  public finalScore: number;
  // @Required()
  public startDate: string;

  // @Required()
  public endDate: string;

  // @Required()
  public reviewDate: string;

  // @Ignore()
  public coreBehaviours: TCoreBehaviour[];

  // @Ignore()
  public kpis: TKpi[];

  public constructor(init?: Partial<TGoal>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
