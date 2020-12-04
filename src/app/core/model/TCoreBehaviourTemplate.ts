import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';

export class TCoreBehaviourTemplate extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public name: string;
  public description: string;
  public weighting: number;

  public constructor(init?: Partial<TCoreBehaviourTemplate>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
