const stripe = require('stripe');

const Stripe = stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion: '2020-08-27',
});

const createCheckoutSession = async (customerID, price) => {
    const session = await Stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        customer: customerID,
        consent_collection: {
            terms_of_service:'required'

        },
        allow_promotion_codes: true,
        success_url: `${process.env.DOMAIN}?success=1`,
        cancel_url: `${process.env.DOMAIN}`,
    });

    return session;
}

const createBillingSession = async (customer) => {
    const session = await Stripe.billingPortal.sessions.create({
        customer,
        return_url: "https://localhost:4242",
    });

    return  session;
}

const getCustomerByID = async (customerID) => {
    const customer = await Stripe.customers.retrieve(id);
    return customer;
}

const createCustomer = async (email) => {
    const customer = await Stripe.customers.create({
        email,
        description:"new customer"
    });

    return customer;
}

const createWebhook =  (rawBody,sig) => {
    const event = Stripe.webhooks.constructEvent(rawBody,sig,process.env.STRIPE_WEBHOOK_SECRET);
    return event; 
}

module.exports = {
    createCheckoutSession,
    createBillingSession,
    getCustomerByID,
    createWebhook,
    createCustomer
};