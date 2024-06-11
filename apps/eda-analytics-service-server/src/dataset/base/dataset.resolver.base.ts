/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Dataset } from "./Dataset";
import { DatasetCountArgs } from "./DatasetCountArgs";
import { DatasetFindManyArgs } from "./DatasetFindManyArgs";
import { DatasetFindUniqueArgs } from "./DatasetFindUniqueArgs";
import { CreateDatasetArgs } from "./CreateDatasetArgs";
import { UpdateDatasetArgs } from "./UpdateDatasetArgs";
import { DeleteDatasetArgs } from "./DeleteDatasetArgs";
import { AnalysisFindManyArgs } from "../../analysis/base/AnalysisFindManyArgs";
import { Analysis } from "../../analysis/base/Analysis";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { User } from "../../user/base/User";
import { DatasetService } from "../dataset.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Dataset)
export class DatasetResolverBase {
  constructor(
    protected readonly service: DatasetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "read",
    possession: "any",
  })
  async _datasetsMeta(
    @graphql.Args() args: DatasetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Dataset])
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "read",
    possession: "any",
  })
  async datasets(
    @graphql.Args() args: DatasetFindManyArgs
  ): Promise<Dataset[]> {
    return this.service.datasets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Dataset, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "read",
    possession: "own",
  })
  async dataset(
    @graphql.Args() args: DatasetFindUniqueArgs
  ): Promise<Dataset | null> {
    const result = await this.service.dataset(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Dataset)
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "create",
    possession: "any",
  })
  async createDataset(
    @graphql.Args() args: CreateDatasetArgs
  ): Promise<Dataset> {
    return await this.service.createDataset({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Dataset)
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "update",
    possession: "any",
  })
  async updateDataset(
    @graphql.Args() args: UpdateDatasetArgs
  ): Promise<Dataset | null> {
    try {
      return await this.service.updateDataset({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Dataset)
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "delete",
    possession: "any",
  })
  async deleteDataset(
    @graphql.Args() args: DeleteDatasetArgs
  ): Promise<Dataset | null> {
    try {
      return await this.service.deleteDataset(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Analysis], { name: "analyses" })
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "read",
    possession: "any",
  })
  async findAnalyses(
    @graphql.Parent() parent: Dataset,
    @graphql.Args() args: AnalysisFindManyArgs
  ): Promise<Analysis[]> {
    const results = await this.service.findAnalyses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Report], { name: "reports" })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @graphql.Parent() parent: Dataset,
    @graphql.Args() args: ReportFindManyArgs
  ): Promise<Report[]> {
    const results = await this.service.findReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Dataset): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
