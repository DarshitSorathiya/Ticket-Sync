import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTickets,
  markInterest,
} from "../controllers/ticket.controller.js";

const router = Router();

router.route("/").get(getAllTickets);

router.route("/:id").get(getTicketById);

router.route("/create").post(verifyJWT, createTicket);

router.route("/update/:id").put(verifyJWT, updateTicket);

router.route("/delete/:id").delete(verifyJWT, deleteTickets);

router.route("/mark-interest/:id").post(verifyJWT, markInterest);

export default router;
