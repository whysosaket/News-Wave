import dotenv from "dotenv";
dotenv.config();

import { Request, response, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import News from "../models/News";

const flaskURL = process.env.FLASK_URL as string

const getNews = async (req: Request, res: Response) => {
  let success = false;
  const pageId = parseInt(req.query.page as string) || 1;
  const itemsPerPage = 5;
  try {
    let news = await News.find({})
      .skip((pageId - 1) * itemsPerPage)
      .limit(itemsPerPage);

    const totalItems = await News.countDocuments();

    success = true;
    return res.json({
      success,
      news,
      currentPage: pageId,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      totalItems,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something Went Wrong!" });
  }
};

const checkNews = async (req: Request, res: Response) => {
    let success = false;
    const { text, model } = req.body;
    try{
        const news = await fetch(`${flaskURL}/predict`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({model: model || "LR", text: text})
        });

        success = true;
        const data = await news.json();
        return res.json({success: success, prediction: data.prediction});

    }catch (error) {
    console.log(error);
    return res.json({ error: "Something Went Wrong!" });
  }
}

export {getNews, checkNews};
