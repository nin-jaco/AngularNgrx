import { IBaseUserModel } from './IBaseUserModel';
import { UserBaseModel } from './UserBaseModel';

export class AddressModel extends UserBaseModel implements IBaseUserModel {
  public address: string;
  public address2: string;
  public city: string;
  public state: string;
  public postalCode: string;
  public country: string;

  public constructor(init?: Partial<AddressModel>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
