import { PartialType } from "@nestjs/mapped-types";
import { CreateAgreementDto } from "./createAgreementDto";

export class UpdateAgreementDto extends PartialType(CreateAgreementDto){}