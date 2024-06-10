import { Module } from "@nestjs/common";
import { EdaAnalysisService } from "./edaanalysis.service";
import { EdaAnalysisController } from "./edaanalysis.controller";
import { EdaAnalysisResolver } from "./edaanalysis.resolver";

@Module({
  controllers: [EdaAnalysisController],
  providers: [EdaAnalysisService, EdaAnalysisResolver],
  exports: [EdaAnalysisService],
})
export class EdaAnalysisModule {}
