import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { TCoreBehaviour } from './TCoreBehaviour';
import { TUserWithManager } from './TUserWithManager';
import { TKpi } from './TKpi';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TComment extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public coreBehaviourId: number;
  public coreBehaviour: TCoreBehaviour;
  public kpiId: number;
  public kpi: TKpi;
  public description: string;
  public userWithManagerId: number;
  public userWithManager: TUserWithManager;

  public constructor(init?: Partial<TComment>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
