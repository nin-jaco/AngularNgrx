import { PagedList } from './PagedList';
import { ResponseStatus } from './ResponseStatus';

export class VantagePagedResponse<T> {
  public responseStatus: ResponseStatus;
  public result: PagedList<T>;
  public errorCode: string;
  public errorMessage: string;
  public isSuccess: boolean;
  public stackTrace: string;

  public constructor(init?: Partial<VantagePagedResponse<T>>) {
    (Object as any).assign(this, init);
  }
}
