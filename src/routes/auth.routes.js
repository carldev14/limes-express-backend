"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_1 = __importDefault(require("../controllers/authController/register"));
const verify_email_1 = __importDefault(require("../controllers/authController/verify_email"));
const login_1 = __importDefault(require("../controllers/authController/login"));
const verify_reset_password_1 = __importDefault(require("../controllers/authController/verify-reset-password"));
const send_reset_password_1 = __importDefault(require("../controllers/authController/send-reset-password"));
const router = express_1.default.Router();
router.post("/register", register_1.default);
router.post("/login", login_1.default);
router.post("/logout");
router.post("/verify-email", verify_email_1.default);
router.post("/verify-reset-password", verify_reset_password_1.default);
router.post("/send-reset-password", send_reset_password_1.default);
exports.default = router;