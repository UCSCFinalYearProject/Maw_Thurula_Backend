const { isEmpty } = require('../../../utils/is_empty');
const conn = require('../../../service/db_service');
const {REGISTERED_Pediatrician,Block_Pediatrician,Unblock_Pediatrician, Registerd_paediatrician_Count,
    Blocked_paediatrician_Count, Pending_paediatrician_Count
} = require('../../../query/Admin/Pediatrician/admin_pediatrician');
const { MOTHER_MODEL} = require('../../../model/Mother/mother_model');
const bcrypt = require('bcryptjs');
const AppError = require('../../../utils/appError');
const JWT = require('jsonwebtoken');

exports.registered_pediatrician = (req, res, next) => {
    try {
        conn.query(REGISTERED_Pediatrician, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    paediatrician:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.Registerd_paediatrician_Count = (req, res, next) => {
    try {
        conn.query(Registerd_paediatrician_Count, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }

        })
    } catch ( err ) {

    }
}
exports.Blocked_paediatrician_Count = (req, res, next) => {
    try {
        conn.query(Blocked_paediatrician_Count, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }
        })
    } catch ( err ) {

    }
}
exports.Pending_paediatrician_Count = (req, res, next) => {
    try {
        conn.query(Pending_paediatrician_Count, (err,data,feild)=>{
            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    data:data
                })
            }

        })
    } catch ( err ) {

    }
}
// block mother
exports.Block_pediatrician = (req, res, next) => {
    try {
        conn.query(Block_Pediatrician,[req.query.mg,req.query.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"success"
                })
            }

        })
    } catch ( err ) {

    }
}
// unblock mother
exports.Unblock_pediatrician = (req, res, next) => {
    try {
        conn.query(Unblock_Pediatrician,[req.query.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    message:"success"
                })
            }
        })
    } catch ( err ) {

    }
}

// pediatrician request list(Y)
exports.View_pediatricians_requests = (req, res, next) => {
    try {
        conn.query(View_Pediatrician_Requests,[req.body.uid],  (err,data,feild)=>{

            if(err){
                return next(new AppError(err))
            }
            else{
                res.status(200).json({
                    pediatricians:data
                })
            }

        })
    } catch ( err ) {

    }
}
