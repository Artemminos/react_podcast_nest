import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {PodcastService} from "./podcast.service";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {CreatePodcastDto} from "./dto/create.podcast.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create.comment.dto";


@Controller('/podcasts')
export class PodcastController {
    constructor(private podcastService: PodcastService) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
        {name: 'audio', maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto: CreatePodcastDto) {
        const {picture, audio} = files;
        return this.podcastService.create(dto, picture[0], audio[0]);
    }
    @Post('/:id')
    descriptionChange(@Param('id') id: ObjectId,@Body('text')text:string) {
        return this.podcastService.descriptionChange(id,text)
    }
    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset: number) {
        return this.podcastService.getAll(count, offset)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.podcastService.getOne(id)
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.podcastService.search(query)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.podcastService.delete(id)
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.podcastService.addComment(dto)
    }

    @Post('/listen/:id')
    listenIncrement(@Param('id') id: ObjectId) {
         return this.podcastService.listenIncrement(id)
    }
    @Post('/rating/:id')
    rating(@Param('id') id: ObjectId,@Body('mark')mark:number) {
         return this.podcastService.ratingHandler(id,mark)
    }

}