import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ServeStaticModule} from "@nestjs/serve-static";
import {PodcastModule} from "./podcast/podcast.module";
import {FileModule} from "./file/file.module";
import * as path from "path";

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'client')}),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.btqvv.mongodb.net/react_podcast?authSource=admin&replicaSet=atlas-iuywr9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'),
        PodcastModule,
        FileModule
    ]
})

export class AppModule{}