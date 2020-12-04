export class TTenantItem {
  public id: number;
  public tenantName: string;
  public active: boolean;
  public lastActivated: string;

  public constructor(init?: Partial<TTenantItem>) {
    (Object as any).assign(this, init);
  }
}
