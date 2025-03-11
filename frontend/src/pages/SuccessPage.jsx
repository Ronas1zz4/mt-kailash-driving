import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const { receiptId } = useParams();
  const [receiptDetails, setReceiptDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceiptDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/payment-success/${receiptId}`);
        const data = await response.json();
        if (response.ok) {
          console.log("data :" , data);
          setReceiptDetails(data);
        } else {
          setError(data.error || "Failed to fetch receipt details");
        }
      } catch (err) {
        setError("An error occurred while fetching receipt details");
      } finally {
        setLoading(false);
      }
    };
    fetchReceiptDetails();
  }, [receiptId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your payment!</p>
      {receiptDetails && (
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
          <p><strong>Receipt Number:</strong> {receiptDetails.receipt_number}</p>
          <p><strong>Amount Paid:</strong> ${receiptDetails.amount / 100}</p>
          <p><strong>Class:</strong> {receiptDetails.class_name}</p>
        </div>
      )}
      <Link to="/" style={{ display: "block", marginTop: "20px", textDecoration: "none", color: "blue" }}>
        Return to Homepage
      </Link>
    </div>
  );
};

export default PaymentSuccess;
