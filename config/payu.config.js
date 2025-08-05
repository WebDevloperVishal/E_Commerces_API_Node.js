import PayU from "payu-websdk";

const payu_key = process.env.MERCHANT_KEY;
const payu_salt = process.env.MERCHANT_SALT;

// Create a client
const payuClient = new PayU({
    key: payu_key,
    salt: payu_salt
}, process.env.PAYU_ENVIRONMENT);

export const PayData = {
    payuClient,
    payu_key,
    payu_salt
}; 