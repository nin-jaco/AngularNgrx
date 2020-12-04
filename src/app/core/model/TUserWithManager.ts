import { TUser } from './TUser';

export class TUserWithManager extends TUser {
  // @Required()
  public managerId: number;

  public manager: TUser;
  public employeeStartDate: string;

  public constructor(init?: Partial<TUserWithManager>) {
    super(init);
    (Object as any).assign(this, init);
  }
}
