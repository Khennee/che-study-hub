"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../database/db");
const AdminRouter = (0, express_1.Router)();
AdminRouter.get("/get", async (req, res) => {
    try {
        const result = await db_1.pool.query('SELECT * FROM admin');
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.error('Error fetching admin data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = AdminRouter;
