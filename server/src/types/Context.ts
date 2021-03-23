import { Request, Response } from "express";
import { assetsCategoryLoader, questionsLoader } from "../utils/";

export interface Context {
  req: Request;
  res: Response;
  questionsLoader: ReturnType<typeof questionsLoader>;
  assetsCategoryLoader: ReturnType<typeof assetsCategoryLoader>;
}
