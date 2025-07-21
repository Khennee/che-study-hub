"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../database/db");
const AdminCheckPinRouter = (0, express_1.Router)();
AdminCheckPinRouter.post('/check', async (req, res) => {
    const { pin } = req.body;
    if (!pin) {
        return res.status(400).json({ success: false, message: 'PIN is required' });
    }
    try {
        const result = await db_1.pool.query('SELECT * FROM admin WHERE pin = $1', [pin]);
        if ((result.rowCount ?? 0) > 0) {
            return res.status(200).json({ success: true });
        }
        else {
            return res.status(401).json({ success: false, message: 'Invalid PIN' });
        }
    }
    catch (err) {
        console.error('Database error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});
exports.default = AdminCheckPinRouter;
