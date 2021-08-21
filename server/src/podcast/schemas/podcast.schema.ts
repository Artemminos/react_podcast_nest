import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {Document} from "mongoose";


export type PodcastDocument = Podcast & Document;

@Schema()
export class Podcast {
    @Prop()
    name:string;

    @Prop()
    speaker:string;

    @Prop()
    listens:number;

    @Prop()
    rating:number;

    @Prop()
    description:string;

     @Prop()
    picture:string;

    @Prop()
    audio:string;

    @Prop({
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }]
    })
    comments:Comment[];
}
export const PodcastSchema = SchemaFactory.createForClass(Podcast)