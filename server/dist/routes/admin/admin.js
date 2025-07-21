"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../database/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AdminRouter = (0, express_1.Router)();
// Route to fetch all admin rows (if needed)
AdminRouter.get("/get", async (req, res) => {
    try {
        const result = await db_1.pool.query("SELECT * FROM admin");
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.error("Error fetching admin data:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
AdminRouter.post("/check", async (req, res) => {
    try {
        const enteredPin = req.body.pin;
        if (!enteredPin) {
            return res.status(400).json({ success: false, message: 'PIN is required' });
        }
        const result = await db_1.pool.query("SELECT pin_hash FROM admin LIMIT 1");
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'No admin PIN found' });
        }
        const hashedPinFromDB = result.rows[0].pin_hash;
        console.log("Entered PIN:", enteredPin);
        console.log("Hashed PIN from DB:", hashedPinFromDB);
        const isMatch = await bcrypt_1.default.compare(enteredPin, hashedPinFromDB);
        if (isMatch) {
            return res.json({ success: true });
        }
        else {
            return res.status(401).json({ success: false, message: 'Invalid PIN' });
        }
    }
    catch (err) {
        console.error("Error checking admin PIN:", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = AdminRouter;
