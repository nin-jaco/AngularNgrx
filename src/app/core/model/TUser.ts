import { TTenantItem } from './TTenantItem';

export class TUser {
  public defaultTenantId: number;
  public id: number;
  public userAuthId: string;
  public userId: string;
  public email: string;
  public userName: string;
  public nickname: string;
  public displayName: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public gender: string;
  public birthDate: string;
  public address: string;
  public address2: string;
  public city: string;
  public state: string;
  public country: string;
  public postalCode: string;
  public timeZone: string;
  public culture: string;
  public language: string;
  public refIdStr: string;
  public company: string;
  public occupation: string;
  public twitterUserId: string;
  public twitterScreenName: string;
  public twitterName: string;
  public facebookName: string;
  public facebookFirstName: string;
  public facebookLastName: string;
  public facebookUserId: string;
  public facebookUserName: string;
  public facebookEmail: string;
  public yahooUserId: string;
  public yahooFullName: string;
  public yahooEmail: string;
  public avatarImage: string;
  public backgroundImage: string;
  public createdDate: string;
  public modifiedDate: string;
  public lastLoginAttempt: string;
  public lockedDate: string;
  public invalidLoginAttempts: number;
  public isLockedOut: boolean;
  // @Ignore()
  public userRoles: string[];

  // @Ignore()
  public tenants: TTenantItem[];

  // @Ignore()
  public userPermissions: string[];

  public constructor(init?: Partial<TUser>) {
    (Object as any).assign(this, init);
  }
}
