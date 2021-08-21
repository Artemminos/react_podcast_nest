import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const server = async () => {
    try {
        const PORT = process.env.PORT || 3002;
        const app = await NestFactory.create(AppModule);
        app.enableCors();
        await app.listen(PORT,()=>{
            console.log('>>>>Server start<<<<')
        })
    } catch (e) {
        console.log('>>>>Server Error<<<<: ', e)
    }
}
server()