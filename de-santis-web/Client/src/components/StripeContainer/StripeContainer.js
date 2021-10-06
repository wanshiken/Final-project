import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../../components/StripePaymentForm/StripePaymentForm"

const PUBLIC_KEY = "pk_test_51JhaFqH2lhKRCux4cFMLbGC38dDX4q2brpBMYUDL6H32UAKsK1crB1mzLPKE6vxXZIq6YwsdEvU8Vn9w3cGVpVRc00tzqtXHjR"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}