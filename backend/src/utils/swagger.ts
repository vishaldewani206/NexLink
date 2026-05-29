import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Express } from "express"
import { schemas } from "../swagger/schemas"
import { authDocs } from "../swagger/authDocs"
import { userDocs } from "../swagger/userDocs"

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NexLink API",
      version: "1.0.0",
    },
    ...schemas,
    paths: {
      ...authDocs.paths,
      ...userDocs.paths,
    },
  },
  apis: [],
}

const swaggerSpec = swaggerJsdoc(options)

export const swaggerDocs = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}