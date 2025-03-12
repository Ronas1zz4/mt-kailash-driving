require("dotenv").config();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Classes = require("../models/Classes");
const User = require("../models/UserDetail");
const Reservation = require("../models/Reservations");
const Receipt = require("../models/Receipts");
const {
    sendVerificationEmail
} = require('../utils/send-emails');
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
                amount: 50000 // Amount paid for the reservation
            });

            console.log("Created reservation with id: ", reservation)



            const receipt = await Receipt.create({
                reservation_id: reservation, // Use the reservation ID from the reservation table
                amount: 50000,
                receipt_number: receiptNumber, // You can create or fetch a receipt code here
                user_id: userId, // Link receipt to the user who made the payment

            });

            return res.json({
                success: true,
                paymentIntent,
                redirectUrl: `/payment-success/${receipt}` // Redirect URL
            });
        };

        res.json({
            error: "Paymnet Error!"
        });
    } catch (error) {
        res.json({
            error: error.message
        });
    }

}

const success = async (req, res) => {
    const {
        receipt_id
    } = req.params;
    console.log(receipt_id);
    const receipt_details = await Receipt.findById(receipt_id);
    const reservationId = await Reservation.findById(receipt_details.reservation_id);
    const amount = reservationId.amount;
    const status = reservationId.status;
    const receipt_number = receipt_details.receipt_number;
    const user = await User.findById(reservationId.user_id);
    const userEmail = user.email;
    // console.log(receipt_id, reservationId, amount, receipt_number, userEmail, status);
    const details = {
        "receipt_id": receipt_id,
        "reservationId": reservationId,
        "amount": amount,
        "receipt_number": receipt_number,
        "userEmail": userEmail,
        "status": status
    };
    sendVerificationEmail(receipt_id, reservationId, amount, receipt_number, userEmail, status);
    res.json(details);
}

module.exports = {
    payment,
    success
};