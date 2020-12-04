import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TRating extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public description: string;
  public value: number;
  public isDeleted: boolean;

  public constructor(init?: Partial<TRating>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
