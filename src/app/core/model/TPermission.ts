import { TRolePermission } from './TRolePermission';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { IHasPTA } from './IHasPTA';
import { IHasCreatedBy } from './IHasCreatedBy';

export class TPermission extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @Required()
  public permissionName: string;

  public permissionAlias: string;
  public permissionDescription: string;
  // @Required()
  public isEnabled: boolean;

  // @Required()
  public isSystem: boolean;

  public rolePermissions: TRolePermission[];

  public constructor(init?: Partial<TPermission>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
