// @DataContract

import { ResponseError } from './ResponseError';

export class ResponseStatus {
  // @DataMember(Order=1)
  public errorCode: string;

  // @DataMember(Order=2)
  public message: string;

  // @DataMember(Order=3)
  public stackTrace: string;

  // @DataMember(Order=4)
  public errors: ResponseError[];

  // @DataMember(Order=5)
  public meta: { [index: string]: string };

  public constructor(init?: Partial<ResponseStatus>) {
    (Object as any).assign(this, init);
  }
}
