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
import { AnalysisWhereInput } from "./AnalysisWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalysisListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisWhereInput)
  @IsOptional()
  @Field(() => AnalysisWhereInput, {
    nullable: true,
  })
  every?: AnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisWhereInput)
  @IsOptional()
  @Field(() => AnalysisWhereInput, {
    nullable: true,
  })
  some?: AnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisWhereInput)
  @IsOptional()
  @Field(() => AnalysisWhereInput, {
    nullable: true,
  })
  none?: AnalysisWhereInput;
}
export { AnalysisListRelationFilter as AnalysisListRelationFilter };