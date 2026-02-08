import express from "express";
import {
  createRecord,
  getRecords
} from "../controller/record.controller.js";
import rateLimiter from "../middleware/ratelimiter.js";
import validateRecord from "../middleware/validater.js";

const router = express.Router();

router.post(
  "/",
  rateLimiter({ windowMs: 60000, maxRequests: 200 }),
  validateRecord,
  createRecord
);

router.get("/", rateLimiter(), getRecords);

export default router;
