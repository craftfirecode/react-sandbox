import express from "express";
import {getQuota} from "../store/dataStore.js";
import {requireAuth} from "../middleware/auth.js";

const router = express.Router();

// Route: http://localhost:3001/api/quota
router.get("/quota", requireAuth, (req, res) => {
    // Liefert das im RAM zusammengeführte, vollständige Objekt zurück
    res.json(getQuota());
});

export default router;
