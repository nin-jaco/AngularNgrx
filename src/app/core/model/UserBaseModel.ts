import { IBaseUserModel } from './IBaseUserModel';
import { TUser } from './TUser';

export class UserBaseModel implements IBaseUserModel {
  public user: TUser;
  public id: string;
  public userId: number;
  public userAuthId: number;
  public accessToken: string;
  public refreshToken: string;

  public constructor(init?: Partial<UserBaseModel>) {
    (Object as any).assign(this, init);
  }
}
