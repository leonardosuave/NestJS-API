/* eslint-disable prettier/prettier */
import { kMaxLength } from "buffer";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, Min, MinLength, ValidateNested } from "class-validator";

export class CharacteristicProductDTO {
    @IsString()
    @IsNotEmpty({ message: 'Characteristic name can not be empty' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Description`s characteristic can not be empty' })
    description: string;
};

export class ImageProductDTO {
    @IsUrl(undefined, { message: 'URL invalid to access image' })
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'image description can not be empty' })
    description: string;
};

export class createProductDTO {
    @IsString()
    @IsNotEmpty({ message: 'The name can not be empty' })
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'The price must be greater than 0' })
    price: number;

    @IsNumber()
    @Min(1, { message: 'min quantity invalid' })
    quantity: number;

    @IsString()
    @IsNotEmpty({ message: 'description product can not be empty' })
    @MaxLength(1000, { message: 'Description must be less 1000 characters' })
    @MinLength(5, { message: 'description must be greater than 5 characters' })
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => CharacteristicProductDTO)
    characteristic: CharacteristicProductDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImageProductDTO)
    image: ImageProductDTO[];

    @IsString()
    @IsNotEmpty({ message: 'product category can not be empty' })
    category: string;
};