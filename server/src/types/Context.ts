import { Request, Response } from "express";
import { questionsLoader } from "../utils/questions.loader";

export interface Context {
  req: Request;
  res: Response;
  questionsLoader: ReturnType<typeof questionsLoader>;
}
