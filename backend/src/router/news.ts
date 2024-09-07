import { Router, Response } from "express";

import {getNews, checkNews} from "../controllers/newsController";

export default (router: Router) => {
    router.route("/api/news").get((req: any, res: Response)=>getNews(req, res));
    router.route("/api/news").post((req: any, res: Response)=>checkNews(req, res));
}