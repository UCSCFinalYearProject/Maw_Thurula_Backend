const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {editptProfileastrologer} = require('../../../query/Astrologer/al_dash_board');
// const { PROFILE_CARD_MODEL } = require('../../../model/Astrologer/Al-Dashboard/stat_card_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');
const {addQulificationsAs} = require("../../../query/Astrologer/al_dash_board");

exports.editptProfileastrologer = (req, res, next) => {
    console.log(req.body)
    // if (isEmpty(req.body)) return next( new AppError("form data not found" , 400));
    try {
        // const { error } = MOTHER_MODEL.validate(req.body);
        // if (error) return next( new AppError( error.details[0].message , 400));

        conn.query(editptProfileastrologer,[req.body.params.object.firstName,req.body.params.object.description,
            req.body.params.object. mobile,
            req.body.params.object.email,req.body.params.object. linkedinUrl,
            req.body.params.object. fbUrl,req.body.params.object.twitterUrl,
            req.body.params.object.Address,req.body.params.doctor_id,req.body.params.serviceCharge], (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
                // console.log(err)
            }
            else{
                res.status(200).json({
                    profit_data:data,
                    //data:"success"
                })
            }

        })
    } catch ( err ) {

    }

}
exports.addQulificationsAs = (req, res, next) => {
    //const y= req.query['today'];
    console.log("addQulificationsAs")
    console.log(req.body.params)
    try {
        conn.query(addQulificationsAs,[req.body.params.id,req.body.params.object],(err,data,feild)=>{

            if(err){
                console.log(err)
                // return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    comment:data
                })
            }

        })
    } catch ( err ) {

    }
}

