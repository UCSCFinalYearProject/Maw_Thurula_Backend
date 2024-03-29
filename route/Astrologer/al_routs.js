const express = require('express');
const al_route = express.Router();
const al_request_table_controller = require('../../controller/Astrologer/al_request_table_controller.js');
const profile_card_controller = require('../../controller/Astrologer/Al-Dashboard/profile_card_controller');
const stat_card1_controller = require('../../controller/Astrologer/Al-Dashboard/stat_card1_controller');
const stat_card2_controller = require('../../controller/Astrologer/Al-Dashboard/stat_card2_controller');
const request_chart_controller = require('../../controller/Astrologer/Al-Dashboard/request_chart_controller');
const profit_chart_controller = require('../../controller/Astrologer/Al-Dashboard/profit_chart_controller');
const editptProfileastrologer=require('../../controller/Astrologer/Al-Dashboard/editptProfileastrologer')


al_route.get("/new_request/:receiver_id",al_request_table_controller.request_table);
al_route.get("/db/request_table_row/:receiver_id",al_request_table_controller.request_table_row);
al_route.get("/db/request_table_row_res/:request_id",al_request_table_controller.request_table_row_res);
al_route.get("/db/insert_res/:request_id/:msg/:letters",al_request_table_controller.insert_response);
al_route.get("/db/today_request/:receiver_id",al_request_table_controller.today_request_table);
al_route.get("/db/profile_card/:user_id",profile_card_controller.profile_card);
al_route.get("/db/stat_card1/:receiver_id",stat_card1_controller.stat_card);
al_route.get("/db/stat_card2/:receiver_id",stat_card2_controller.stat_card);
al_route.get("/db/req_chart/:receiver_id",request_chart_controller.request_chart);

al_route.get("/db/profit_chart/:receiver_id",profit_chart_controller.profit_chart);
al_route.post("/editptProfileastrologer",editptProfileastrologer.editptProfileastrologer);
al_route.post("/addQulificationsAs",editptProfileastrologer.addQulificationsAs);
//http://localhost:3000/al/db/profit_chart/1

module.exports = al_route;
