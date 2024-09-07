import { Router } from "express";
import auth from "./auth";
import news from "./news";


const router = Router();

export default (): Router => {
  auth(router);
  news(router);
  return router;
};