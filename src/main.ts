import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
  const port = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  Logger.log(`Listening at http://localhost:${port}`)
}

start()