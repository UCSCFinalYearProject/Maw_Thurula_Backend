const { isEmpty } = require('../../utils/is_empty');
const conn = require('../../service/db_service');
//const {REQUEST_table } = require('../../query/Mobile-Mother/mobile_mother_request_table');
const { REQUEST_TABLE_MODEL } = require('../../model/Mobile-Mother/mobile_mother_request_table_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');
const JWT = require('jsonwebtoken');
const {REQUEST_table} = require("../../query/Astrologer/al_request_table");


exports.request_table = (req, res, next) => {
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(REQUEST_table,[req.params.receiver_id], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    req:data,
                    //data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}