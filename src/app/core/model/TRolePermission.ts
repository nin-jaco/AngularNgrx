import { TRole } from './TRole';
import { TPermission } from './TPermission';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { IHasPTA } from './IHasPTA';
import { IHasCreatedBy } from './IHasCreatedBy';

export class TRolePermission extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @Required()
  public roleId: number;

  // @Required()
  public permissionId: number;

  // @Required()
  public isEnabled: boolean;

  public role: TRole;
  public permission: TPermission;

  public constructor(init?: Partial<TRolePermission>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
