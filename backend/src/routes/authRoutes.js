import express from "express";
import validator from "../middlewares/validator.js";
import { register,login } from "../controllers/authController.js";
import { loginschema, registerschema } from "../validators/authValidator.js";

const router = express.Router();

router.post("/register",validator(registerschema),register);
router.post("/login", validator(loginschema), login);

export default router;