import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';
import { IVantageCoreTypeWithoutVersioning } from './IVantageCoreTypeWithoutVersioning';
import { TTenantItem } from './TTenantItem';
import { TUser } from './TUser';
import { UserAuthDetails } from './UserAuthDetails';
import { VantageTypeBaseWithVersioning } from './VantageTypeBaseWithVersioning';

export class TUserAuth extends VantageTypeBaseWithVersioning
  implements IVantageCoreTypeWithoutVersioning, IHasPTA, IHasCreatedBy {
  public id: number;
  public session: Object;
  public userAuth: TUser;
  public userAuthDetails: UserAuthDetails[];
  public userAuthRoles: string[];
  public userPermissions: string[];
  public tenants: TTenantItem[];

  public constructor(init?: Partial<TUserAuth>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
