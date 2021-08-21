import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {Document} from "mongoose";
import {Podcast} from "./podcast.schema";

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;
    @Prop()
    text: string;
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    })
    podcast: Podcast
}

export const CommentSchema = SchemaFactory.createForClass(Comment);