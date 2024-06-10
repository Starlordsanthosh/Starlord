import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

class EdaDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    datasetId!: string;

    @Field(() => GraphQLJSON)
    edaResult!: InputJsonValue;
}

export { EdaDto as EdaDto };