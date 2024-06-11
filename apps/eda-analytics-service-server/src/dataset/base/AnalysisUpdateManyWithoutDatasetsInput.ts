/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AnalysisWhereUniqueInput } from "../../analysis/base/AnalysisWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AnalysisUpdateManyWithoutDatasetsInput {
  @Field(() => [AnalysisWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalysisWhereUniqueInput],
  })
  connect?: Array<AnalysisWhereUniqueInput>;

  @Field(() => [AnalysisWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalysisWhereUniqueInput],
  })
  disconnect?: Array<AnalysisWhereUniqueInput>;

  @Field(() => [AnalysisWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalysisWhereUniqueInput],
  })
  set?: Array<AnalysisWhereUniqueInput>;
}

export { AnalysisUpdateManyWithoutDatasetsInput as AnalysisUpdateManyWithoutDatasetsInput };
