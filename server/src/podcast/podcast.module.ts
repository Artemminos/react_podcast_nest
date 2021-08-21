import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {Podcast, PodcastSchema} from "./schemas/podcast.schema";
import {Comment, CommentSchema} from "./schemas/comment.schema";
import {PodcastService} from "./podcast.service";
import {FileService} from "../file/file.service";
import {PodcastController} from "./podcast.controller";


@Module({
    imports: [
        MongooseModule.forFeature([{name: Podcast.name, schema: PodcastSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
    ],
    controllers: [PodcastController],
    providers: [PodcastService, FileService]
})
export class PodcastModule {
}