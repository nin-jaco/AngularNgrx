import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';

export class VantageTypeBaseWithoutVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @Required()
  public id: number;

  // @Required()
  public createdByUserId: number;

  // @Required()
  public dateCreated: string;

  // @Required()
  public dateEffective: string;

  // @Required()
  public dateExpired: string;

  // @Required()
  public dateChanged: string;

  // @Ignore()
  public displayValue: string;

  // @Ignore()
  public ownerName: string;

  public constructor(init?: Partial<VantageTypeBaseWithoutVersioning>) {
    (Object as any).assign(this, init);
  }
}
