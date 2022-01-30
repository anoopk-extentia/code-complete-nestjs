import { ApiProperty } from "@nestjs/swagger";

export class Name {
    @ApiProperty({example: '.012786152436', 
                description: 'Randomly generated, alsmost certainly unique id of the entry'})
    id: string;
    @ApiProperty({example: 'Bikes', 
                description: 'Name'})
    name: string;
}
