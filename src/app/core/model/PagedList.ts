export class PagedList<T> {
  public data: T[];
  public pageIndex: number;
  public pageSize: number;
  public totalCount: number;
  public totalPages: number;
  public hasPreviousPage: boolean;
  public hasNextPage: boolean;

  public constructor(init?: Partial<PagedList<T>>) {
    (Object as any).assign(this, init);
  }
}
