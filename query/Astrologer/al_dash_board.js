exports.PROFILE_card = "SELECT * FROM `astrologer` WHERE `astrologer`.`user_id` = 1 ";
// http://localhost:3000/al/db/profile_card/?user_id=1

exports.STAT_card1 = "SELECT COUNT(*) AS waiting FROM astrologer_request WHERE request_status=0";
exports.STAT_card2 = "SELECT COUNT(*) AS replied FROM astrologer_request WHERE request_status=1";