import { Kpi } from './kpi.model';

	export class KpiComment {
		id:number;
		hrKpiId: number;
		hrKpi: Kpi;
		description: string;
	}
