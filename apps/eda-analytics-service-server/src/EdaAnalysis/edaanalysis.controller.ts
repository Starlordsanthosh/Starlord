import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EdaAnalysisService } from "./edaanalysis.service";

@swagger.ApiTags("edaAnalyses")
@common.Controller("edaAnalyses")
export class EdaAnalysisController {
  constructor(protected readonly service: EdaAnalysisService) {}

  @common.Get("/:id/perform-eda")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformEda(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PerformEda(body);
      }
}
