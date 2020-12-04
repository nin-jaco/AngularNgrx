import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TSetting extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public tenantId: number;
  public settingName: string;
  public settingAlias: string;
  public settingType: number;
  public settingValue: string;
  public settingValue1: string;
  public settingValue2: string;
  public settingValue3: string;

  public constructor(init?: Partial<TSetting>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
