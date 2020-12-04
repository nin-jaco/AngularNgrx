// @DataContract

export class ResponseError {
  // @DataMember(Order=1, EmitDefaultValue=false)
  public errorCode: string;

  // @DataMember(Order=2, EmitDefaultValue=false)
  public fieldName: string;

  // @DataMember(Order=3, EmitDefaultValue=false)
  public message: string;

  // @DataMember(Order=4, EmitDefaultValue=false)
  public meta: { [index: string]: string };

  public constructor(init?: Partial<ResponseError>) {
    (Object as any).assign(this, init);
  }
}
