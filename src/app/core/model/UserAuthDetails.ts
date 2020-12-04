export class UserAuthDetails {
  public id: number;
  public userAuthId: number;
  public provider: string;
  public userId: string;
  public userName: string;
  public fullName: string;
  public displayName: string;
  public firstName: string;
  public lastName: string;
  public company: string;
  public email: string;
  public phoneNumber: string;
  public birthDate: string;
  public birthDateRaw: string;
  public address: string;
  public address2: string;
  public city: string;
  public state: string;
  public country: string;
  public culture: string;
  public gender: string;
  public language: string;
  public mailAddress: string;
  public nickname: string;
  public postalCode: string;
  public timeZone: string;
  public refreshToken: string;
  public refreshTokenExpiry: string;
  public requestToken: string;
  public requestTokenSecret: string;
  public items: { [index: string]: string };
  public accessToken: string;
  public accessTokenSecret: string;
  public createdDate: string;
  public modifiedDate: string;
  public refId: number;
  public refIdStr: string;
  public meta: { [index: string]: string };

  public constructor(init?: Partial<UserAuthDetails>) {
    (Object as any).assign(this, init);
  }
}
