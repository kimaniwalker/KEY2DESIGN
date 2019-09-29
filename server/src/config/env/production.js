

let cfg = {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    TIMBER: process.env.TIMBER,
    TIMBER_SOURCEID: process.env.TIMBER_SOURCEID,
    STRIPE_SK: process.env.STRIPE_SK,
    CLOUDINARY: process.env.CLOUDINARY,
    db: {
        connectionLimit:  10,
    host:  process.env.DB_HOST,
    user:  process.env.DB_USER,
    password:  process.env.DB_PASS,
    database:  process.env.DB_SCHEMA
    },
};

export { cfg };