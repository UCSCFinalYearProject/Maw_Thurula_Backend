const express = require('express');
const np_route = express.Router();
const np_request_table_controller = require('../../controller/Name-Provider/np_request_table_controller.js');
const profile_card_controller = require('../../controller/Name-Provider/Np-Dashboard/profile_card_controller')
const stat_card1_controller = require('../../controller/Name-Provider/Np-Dashboard/stat_card1_controller');
const stat_card2_controller = require('../../controller/Name-Provider/Np-Dashboard/stat_card2_controller');
const request_chart_controller = require('../../controller/Name-Provider/Np-Dashboard/request_chart_controller');
const profit_chart_controller = require('../../controller/Name-Provider/Np-Dashboard/profit_chart_controller');
const al_request_table_controller = require("../../controller/Astrologer/al_request_table_controller");
const editptProfileNP = require("../../controller/Name-Provider/Np-Dashboard/editptProfileNameprovider");



np_route.get("/db/today_request/:receiver_id",np_request_table_controller.today_request_table);

np_route.get("/db/request_table_row/:receiver_id",np_request_table_controller.request_table_row);
np_route.get("/db/request_table_row_res/:request_id",np_request_table_controller.request_table_row_res);
np_route.get("/db/insert_res/:request_id/:msg/:names",np_request_table_controller.insert_response);

np_route.get("/new_request/:receiver_id",np_request_table_controller.request_table);
np_route.get("/db/profile_card/:user_id",profile_card_controller.profile_card);
np_route.get("/db/stat_card1/:receiver_id",stat_card1_controller.stat_card);
np_route.get("/db/stat_card2/:receiver_id",stat_card2_controller.stat_card);
np_route.get("/db/req_chart/:receiver_id",request_chart_controller.request_chart);
np_route.get("/db/profit_chart/:receiver_id",profit_chart_controller.profit_chart);
np_route.get("/editptProfileNP",editptProfileNP.editptProfileNP);
np_route.get("/addQulificationsAs",editptProfileNP.addQulificationsNP);
module.exports = np_route;