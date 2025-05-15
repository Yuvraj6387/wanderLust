const joi = require("joi");
const Listing = require("./models/listing");

module.exports. listingSchema =joi.object({
    Listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        country: joi.string().required().min(0),
        imaeg: joi.string().allow("" , null)
    }).required()
});