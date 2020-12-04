import { IHasCreatedBy } from './IHasCreatedBy';
import { IHasPTA } from './IHasPTA';

export interface IVantageCoreTypeWithoutVersioning
  extends IHasPTA,
    IHasCreatedBy {
  id: number;
  displayValue: string;
  ownerName: string;
}
