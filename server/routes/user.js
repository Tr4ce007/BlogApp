import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signin", signin);// This route is for signing in
router.post("/signup", signup);// This route is for signing up

export default router;