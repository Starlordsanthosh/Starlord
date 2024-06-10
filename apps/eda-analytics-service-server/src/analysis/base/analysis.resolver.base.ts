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
import { Analysis } from "./Analysis";
import { AnalysisCountArgs } from "./AnalysisCountArgs";
import { AnalysisFindManyArgs } from "./AnalysisFindManyArgs";
import { AnalysisFindUniqueArgs } from "./AnalysisFindUniqueArgs";
import { CreateAnalysisArgs } from "./CreateAnalysisArgs";
import { UpdateAnalysisArgs } from "./UpdateAnalysisArgs";
import { DeleteAnalysisArgs } from "./DeleteAnalysisArgs";
import { Dataset } from "../../dataset/base/Dataset";
import { AnalysisService } from "../analysis.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Analysis)
export class AnalysisResolverBase {
  constructor(
    protected readonly service: AnalysisService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "read",
    possession: "any",
  })
  async _analysesMeta(
    @graphql.Args() args: AnalysisCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Analysis])
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "read",
    possession: "any",
  })
  async analyses(
    @graphql.Args() args: AnalysisFindManyArgs
  ): Promise<Analysis[]> {
    return this.service.analyses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Analysis, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "read",
    possession: "own",
  })
  async analysis(
    @graphql.Args() args: AnalysisFindUniqueArgs
  ): Promise<Analysis | null> {
    const result = await this.service.analysis(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Analysis)
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "create",
    possession: "any",
  })
  async createAnalysis(
    @graphql.Args() args: CreateAnalysisArgs
  ): Promise<Analysis> {
    return await this.service.createAnalysis({
      ...args,
      data: {
        ...args.data,

        dataset: args.data.dataset
          ? {
              connect: args.data.dataset,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Analysis)
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "update",
    possession: "any",
  })
  async updateAnalysis(
    @graphql.Args() args: UpdateAnalysisArgs
  ): Promise<Analysis | null> {
    try {
      return await this.service.updateAnalysis({
        ...args,
        data: {
          ...args.data,

          dataset: args.data.dataset
            ? {
                connect: args.data.dataset,
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

  @graphql.Mutation(() => Analysis)
  @nestAccessControl.UseRoles({
    resource: "Analysis",
    action: "delete",
    possession: "any",
  })
  async deleteAnalysis(
    @graphql.Args() args: DeleteAnalysisArgs
  ): Promise<Analysis | null> {
    try {
      return await this.service.deleteAnalysis(args);
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
  @graphql.ResolveField(() => Dataset, {
    nullable: true,
    name: "dataset",
  })
  @nestAccessControl.UseRoles({
    resource: "Dataset",
    action: "read",
    possession: "any",
  })
  async getDataset(
    @graphql.Parent() parent: Analysis
  ): Promise<Dataset | null> {
    const result = await this.service.getDataset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}