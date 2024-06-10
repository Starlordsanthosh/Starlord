import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatasetModuleBase } from "./base/dataset.module.base";
import { DatasetService } from "./dataset.service";
import { DatasetController } from "./dataset.controller";
import { DatasetResolver } from "./dataset.resolver";

@Module({
  imports: [DatasetModuleBase, forwardRef(() => AuthModule)],
  controllers: [DatasetController],
  providers: [DatasetService, DatasetResolver],
  exports: [DatasetService],
})
export class DatasetModule {}
