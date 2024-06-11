import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DatasetService } from "./dataset.service";
import { DatasetControllerBase } from "./base/dataset.controller.base";

@swagger.ApiTags("datasets")
@common.Controller("datasets")
export class DatasetController extends DatasetControllerBase {
  constructor(
    protected readonly service: DatasetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
