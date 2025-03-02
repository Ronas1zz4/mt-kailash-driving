// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";

// const stripePromise = loadStripe("pk_test_51QqIwcB2AAOo1qHdXo7SWpuUmhWL7QMHd0V5lDPdmlAPDEO60QIm5GYJi99oFw88Fbslqix3Lrm6WdZmO01DuKpi00nVwvPqCy");

// function CheckoutButton({classId}) {
//     const handleCheckout = async () => {
//       try {
//         // Step 1: Call the backend to create a Checkout Session
//         const response = await fetch("http://localhost:5001/create-checkout-session", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ class_id: classId }),
//         });
  
//         const { sessionId } = await response.json(); // Get the session ID
  
//         // Step 2: Redirect to Stripe Checkout
//         const stripe = await stripePromise; // Load Stripe.js
//         const { error } = await stripe.redirectToCheckout({ sessionId });
  
//         if (error) {
//           console.error("Error redirecting to checkout:", error);
//           alert("Failed to redirect to checkout. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred. Please try again.");
//       }
//     };
  
//     return (
//       <button onClick={handleCheckout}>
//         Checkout
//       </button>
//     );
//   }
  
//   export default CheckoutButton;





// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

//  const stripePromise = loadStripe("pk_test_51QqIwcB2AAOo1qHdXo7SWpuUmhWL7QMHd0V5lDPdmlAPDEO60QIm5GYJi99oFw88Fbslqix3Lrm6WdZmO01DuKpi00nVwvPqCy");

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setError(error.message);
//       setLoading(false);
//       return;
//     }

//     const response = await fetch("http://localhost:5001/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: 55000 }),
//     });

//     const result = await response.json();
//     if (result.error) {
//       setError(result.error);
//     } else {
//       alert("Payment successful!");
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
//       <h2>Teen Driving Class - $550</h2>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : "Pay"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// };

// const StripeCheckout = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );

// export default StripeCheckout;



import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QqIwcB2AAOo1qHdXo7SWpuUmhWL7QMHd0V5lDPdmlAPDEO60QIm5GYJi99oFw88Fbslqix3Lrm6WdZmO01DuKpi00nVwvPqCy");

const CheckoutForm = ({classId}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State for user details
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const response = await fetch("http://localhost:5001/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentMethodId: paymentMethod.id,
        amount: 55000,
        email,
        firstName,
        lastName,
        class_id: classId
      }),
    });

    const result = await response.json();
    if (result.error) {
      setError(result.error);
    } else {
      alert("Payment successful!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>{classId}</h2>
      
      {/* Input fields for user details */}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      
      {/* Card Element */}
      <CardElement />
      
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

const StripeCheckout = ({ classId })=> (
  <Elements stripe={stripePromise}>
    <CheckoutForm classId={classId} />
  </Elements>
);

export default StripeCheckout;
