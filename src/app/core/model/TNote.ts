import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { TCoreBehaviour } from './TCoreBehaviour';
import { TKpi } from './TKpi';
import { TUserWithManager } from './TUserWithManager';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TNote extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public kpiId: number;
  public kpi: TKpi;
  public coreBehaviourId: number;
  public coreBehaviour: TCoreBehaviour;
  public noteText: string;
  public userWithManagerId: number;
  public userWithManager: TUserWithManager;

  public constructor(init?: Partial<TNote>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
