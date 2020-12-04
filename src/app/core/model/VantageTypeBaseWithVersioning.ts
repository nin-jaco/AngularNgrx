import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { VantageTypeBaseWithoutVersioning } from './VantageTypeBaseWithoutVersioning';

export class VantageTypeBaseWithVersioning
  extends VantageTypeBaseWithoutVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @Required()
  public changedByUserId: number;

  // @Ignore()
  public changerName: string;

  public constructor(init?: Partial<VantageTypeBaseWithVersioning>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
