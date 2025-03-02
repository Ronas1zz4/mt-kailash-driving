require("dotenv").config();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Classes = require("../models/Classes");
const User = require("../models/UserDetail");
const Reservation = require("../models/Reservations");
const Receipt = require("../models/Receipts");
const {
    v4: uuidv4
} = require('uuid');


const payment = async (req, res) => {
    // const {
    //     class_id
    // } = req.body
    // console.log(class_id);
    // const classDetails = await Classes.findById(Number(class_id));
    try {
        const {
            paymentMethodId,
            amount,
            email,
            firstName,
            lastName,
            class_id
        } = req.body;

        console.log(email, firstName, lastName, class_id)

        if (!amount || !paymentMethodId) {
            return res.status(400).json({
                error: "Missing required fields"
            });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method: paymentMethodId,
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never",
            },
        })

        if (paymentIntent.status === "succeeded") {
            // Insert the receipt details into MySQL
            const receiptNumber = uuidv4();
            const userId = await User.create({
                first_name: firstName,
                last_name: lastName,
                email,
            });
            console.log("Created user with id: ", userId);

            await Classes.updateCurrentCapacity(Number(class_id));
            // const amount = await Classes.findById(Number(class_id)).cost;
            //console.log(amount);


            const reservation = await Reservation.create({
                user_id: userId, // The user who made the reservation
                class_id: class_id, // The class the user reserved reserva
                status: 'reserved',
                amount: 500 // Amount paid for the reservation
            });

            console.log("Created reservation with id: ", reservation)



            const receipt = await Receipt.create({
                reservation_id: reservation, // Use the reservation ID from the reservation table
                amount: 500,
                receipt_number: receiptNumber, // You can create or fetch a receipt code here
                user_id: userId, // Link receipt to the user who made the payment

            });
        };

        res.json({
            success: true,
            paymentIntent
        });
    } catch (error) {
        res.json({
            error: error.message
        });
    }

}

module.exports = {
    payment
};