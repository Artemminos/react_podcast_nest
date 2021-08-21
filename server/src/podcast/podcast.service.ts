import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Podcast, PodcastDocument} from "./schemas/podcast.schema";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {Model, ObjectId} from "mongoose";
import {CreatePodcastDto} from "./dto/create.podcast.dto";
import {FileService, FileType} from "../file/file.service";
import {CreateCommentDto} from "./dto/create.comment.dto";

@Injectable()
export class PodcastService {
    constructor(
        @InjectModel(Podcast.name) private podcastModel: Model<PodcastDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private fileService: FileService
    ) {
    }

    async create(dto: CreatePodcastDto, picture, audio): Promise<Podcast> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);

        return await this.podcastModel.create({
            ...dto,
            audio: audioPath,
            picture: picturePath,
        });
    }

    async getAll(count = 10, offset = 0): Promise<Podcast[]> {
        return this.podcastModel.find().skip(Number(offset)).limit(Number(count));
    }

    async getOne(id: ObjectId): Promise<Podcast> {
        const podcast = await this.podcastModel.findById(id).populate('comments');
        return podcast;
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const podcast = await this.podcastModel.findByIdAndDelete(id);
        return podcast._id;
    }

    async listenIncrement(id: ObjectId) {
        const podcast = await this.podcastModel.findById(id);
         podcast.listens = (podcast.listens || 0) + 1;
        podcast.save();
    }

    async descriptionChange(id: ObjectId, description: string): Promise<Podcast> {
        const podcast = await this.podcastModel.findById(id);
        podcast.description = description;
        await podcast.save();
        return podcast;
    }

    async ratingHandler(id: ObjectId, mark: number) {
        const podcast = await this.podcastModel.findById(id);
        podcast.rating =  (podcast.rating || 0) + mark;
        podcast.save();
    }

    async addComment(dto: CreateCommentDto): Promise<Podcast> {
        const podcast = await this.podcastModel.findById(dto.podcastId);

        const comment = await this.commentModel.create({...dto});
        podcast.comments.push(comment._id);
        await podcast.save();
        return podcast;
    }



    async search(query: string): Promise<Podcast[]> {
        const podcasts = await this.podcastModel.find({
            name: {$regex: new RegExp(query, 'i')}
        });
        return podcasts;
    }
}