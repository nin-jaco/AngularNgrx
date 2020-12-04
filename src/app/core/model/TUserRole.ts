import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { TRole } from './TRole';
import { TUser } from './TUser';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TUserRole extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @Required()
  public roleId: number;

  // @Required()
  public userAuthId: number;

  // @Required()
  public isSystem: boolean;

  // @Required()
  public isEnabled: boolean;

  public role: TRole;
  // @Ignore()
  public user: TUser;

  public constructor(init?: Partial<TUserRole>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
