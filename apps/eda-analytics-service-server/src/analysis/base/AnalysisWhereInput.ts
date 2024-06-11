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
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EnumAnalysisTypeField } from "./EnumAnalysisTypeField";

@InputType()
class AnalysisWhereInput {
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
  dataset?: DatasetWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  result?: JsonFilter;

  @ApiProperty({
    required: false,
    enum: EnumAnalysisTypeField,
  })
  @IsEnum(EnumAnalysisTypeField)
  @IsOptional()
  @Field(() => EnumAnalysisTypeField, {
    nullable: true,
  })
  typeField?: "Option1";
}

export { AnalysisWhereInput as AnalysisWhereInput };
