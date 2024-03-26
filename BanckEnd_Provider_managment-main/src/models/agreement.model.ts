export class AgreementModel {
  id: number;
  title: string;
  position: string;
  description: string;
  salary: string;
  skill: string;
  cycle: string;
  materialGroup: string;
  teamMember: string;
  providerName: string;
  providerEmail: string;
  technologyLevel: string;
  role: string;
  status: string;
  review?: number;
  comment?: string;
  jobStartDate: string;
  jobEndDate: string;
  startContractDate: string;
  endContractDate: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<AgreementModel>) {
    Object.assign(this, data);
  }
}