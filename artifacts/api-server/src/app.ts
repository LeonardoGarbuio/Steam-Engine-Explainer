import express, { type Express, type RequestHandler } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

type ReqSerializer = {
  id?: string | number;
  method?: string;
  url?: string;
};

type ResSerializer = {
  statusCode?: number;
};

const httpLogger = pinoHttp as unknown as (options: unknown) => RequestHandler;

app.use(
  httpLogger({
    logger,
    serializers: {
      req(req: ReqSerializer) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ResSerializer) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
