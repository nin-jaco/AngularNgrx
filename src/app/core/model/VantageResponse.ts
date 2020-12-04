import { ResponseStatus } from './ResponseStatus';

export class VantageResponse<T> {
  public responseStatus: ResponseStatus;
  public result: T;
  public errorCode: string;
  public errorMessage: string;
  public isSuccess: boolean;
  public stackTrace: string;

  public constructor(init?: Partial<VantageResponse<T>>) {
    (Object as any).assign(this, init);
  }
}
