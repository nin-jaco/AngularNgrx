import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { TCoreBehaviour } from './TCoreBehaviour';
import { TKpi } from './TKpi';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';
import { TUserWithManager } from './TUserWithManager';

export class TFileUpload extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public kpiId: number;
  public kpi: TKpi;
  public coreBehaviourId: number;
  public coreBehaviour: TCoreBehaviour;
  public filename: string;
  public fileData: Uint8Array;
  public userWithManagerId: number;
  public userWithManager: TUserWithManager;

  public constructor(init?: Partial<TFileUpload>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
