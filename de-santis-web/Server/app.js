// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

//stripe



// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const bodyParser = require("body-parser")
const cookieParser= require("cookie-parser")
// Handles the handlebars
// https://www.npmjs.com/package/hbs


const app = express();
const cors = require("cors")
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
    const { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "De Santis beats",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Sever is listening on port 5000")
})

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./config/session.config")(app)
require("./config/cors.config")(app);

// default value for title local
const projectName = "De-Santis-web";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const allRoutes = require('./routes')
app.use("/api", allRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
