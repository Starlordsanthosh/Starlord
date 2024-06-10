import * as graphql from "@nestjs/graphql";
import { EdaAnalysisService } from "./edaanalysis.service";

export class EdaAnalysisResolver {
  constructor(protected readonly service: EdaAnalysisService) {}

  @graphql.Query(() => String)
  async PerformEda(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PerformEda(args);
  }
}
