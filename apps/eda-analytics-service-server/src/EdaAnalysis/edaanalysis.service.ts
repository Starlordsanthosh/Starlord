import { Injectable } from "@nestjs/common";

@Injectable()
export class EdaAnalysisService {
  constructor() {}
  async PerformEda(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
