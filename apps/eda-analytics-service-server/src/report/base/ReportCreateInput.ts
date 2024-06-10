/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DatasetWhereUniqueInput } from "../../dataset/base/DatasetWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ReportCreateInput {
  @ApiProperty({
    required: false,
    type: () => DatasetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DatasetWhereUniqueInput)
  @IsOptional()
  @Field(() => DatasetWhereUniqueInput, {
    nullable: true,
  })
  dataset?: DatasetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  file?: InputJsonValue;
}

export { ReportCreateInput as ReportCreateInput };