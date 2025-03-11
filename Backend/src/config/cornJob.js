import cron from "node-cron";
import { Ticket } from "../models/ticket.model.js";

const deleteExpiredTickets = async () => {
  try {
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    await Ticket.deleteMany({
      $or: [
        { date: { $lt: currentDate } },
        { date: { $eq: currentDate }, departureTime: { $lt: currentTime } },
      ],
    });

    console.log("Expired tickets deleted successfully");
  } catch (error) {
    console.error("Error deleting expired tickets:", error);
  }
};

cron.schedule("* * * * *", deleteExpiredTickets);
