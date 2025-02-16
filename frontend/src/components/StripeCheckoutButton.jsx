import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_51QqIwcB2AAOo1qHdXo7SWpuUmhWL7QMHd0V5lDPdmlAPDEO60QIm5GYJi99oFw88Fbslqix3Lrm6WdZmO01DuKpi00nVwvPqCy");

function CheckoutButton() {
    const handleCheckout = async () => {
      try {
        // Step 1: Call the backend to create a Checkout Session
        const response = await fetch("http://localhost:5001/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
  
        const { sessionId } = await response.json(); // Get the session ID
  
        // Step 2: Redirect to Stripe Checkout
        const stripe = await stripePromise; // Load Stripe.js
        const { error } = await stripe.redirectToCheckout({ sessionId });
  
        if (error) {
          console.error("Error redirecting to checkout:", error);
          alert("Failed to redirect to checkout. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    };
  
    return (
      <button onClick={handleCheckout}>
        Checkout
      </button>
    );
  }
  
  export default CheckoutButton;