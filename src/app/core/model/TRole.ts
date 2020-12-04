import { TPermission } from './TPermission';
import { TRolePermission } from './TRolePermission';
import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TRole extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  // @References(typeof(TRole))
  public parentRoleId: number;

  // @Required()
  public roleName: string;

  public roleAlias: string;
  public roleDescription: string;
  // @Required()
  public isSystem: boolean;

  // @Required()
  public autoMap: boolean;

  // @Required()
  public isPublic: boolean;

  // @Required()
  public isEnabled: boolean;

  public rolePermissions: TRolePermission[];
  // @Ignore()
  public permissions: TPermission[];

  public parentRole: TRole;

  public constructor(init?: Partial<TRole>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
