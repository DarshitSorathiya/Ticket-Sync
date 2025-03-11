import { Ticket } from "../models/ticket.model.js";
import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const createTicket = asyncHandler(async (req, res) => {
  const { trainNo, from, to, date, departureTime, quantity } = req.body;

  const ticket = await Ticket.create({
    owner: req.user._id,
    trainNo,
    from,
    to,
    date,
    departureTime,
    quantity,
  });

  if (!ticket)
    throw new ApiError(402, "Something went wrong when uploading information");

  return res
    .status(201)
    .json(new ApiResponse(201, ticket, "Ticket Created Successfully"));
});

const getAllTickets = asyncHandler(async (req, res) => {
  const { trainNo, from, to, date, status, minQuantity } = req.query;

  let filter = {};

  if (trainNo) filter.trainNo = trainNo;
  if (from) filter.from = new RegExp(from, "i");
  if (to) filter.to = new RegExp(to, "i");
  if (date) filter.date = new Date(date);
  if (status) filter.status = status;
  if (minQuantity) filter.quantity = { $gte: parseInt(minQuantity) };

  const tickets = await Ticket.find(filter).populate("owner", "username email");

  if (!tickets) throw new ApiError(400, "No Tickets are available");

  return res
    .status(200)
    .json(new ApiResponse(200, tickets, "Tickets retrieved successfully"));
});

const getTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).populate(
    "owner",
    "username email"
  );
  if (!ticket) throw new ApiError(404, "Ticket not found");
  return res
    .status(200)
    .json(new ApiResponse(200, ticket, "Ticket retrieved successfully"));
});

const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params._id);

  if (!ticket) throw new ApiError(404, "Ticket not found");

  if (ticket.owner.toString() !== req.params._id.toString())
    throw new ApiError(403, "Unauthorized");

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updateTicket)
    throw new ApiError(400, "Something went wrong while updating tickets");

  return res
    .status(200)
    .json(new ApiResponse(200, updatedTicket, "Ticket updated successfully"));
});

const deleteTickets = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) throw new ApiError(404, "Tickets not found");

  if (ticket.owner.toString() !== req.params._id.toString())
    throw new ApiError(403, "Unauthorized");

  await Ticket.findByIdAndDelete(req.params.id);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Ticket deleted successfully"));
});

const markInterest = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) throw new ApiError(404, "Ticket not found");

  const isAlreadyMarked = ticket.interestedUsers.some(
    (user) => user.userId.toString() === req.params._id.toString()
  );

  if (isAlreadyMarked) throw new ApiError(400, "You have already marked");

  ticket.interestedUsers.push({ userId: req.params._id });
  await ticket.save();

  const userPhone = req.user.phone || req.user.email || "Unknown";

  const subject = "Someone is Interested in Your Ticket!";
  const message = `Hello, 
  A user ${userPhone} is interested in your ticket from ${ticket.from} to ${ticket.to} on ${ticket.date}.
  Please check your dashboard for more details.`;

  await sendEmail(ticket.owner.email, subject, message);

  return res
    .status(201)
    .json(new ApiResponse(201, ticket, "Interest marked successfully"));
});

export {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTickets,
  markInterest,
};
