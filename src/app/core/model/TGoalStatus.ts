import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TGoalStatus extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public description: string;

  public constructor(init?: Partial<TGoalStatus>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
