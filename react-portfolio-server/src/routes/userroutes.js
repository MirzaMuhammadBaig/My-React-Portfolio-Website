import express from "express";
import { sendMail } from "../controllers/contactctrl.js";

const router = express.Router();
router.post("/sendmail", sendMail);


export default router;