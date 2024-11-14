import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const port = 3000
	app.use(cookieParser())
	await app.listen(port)
}
bootstrap()
