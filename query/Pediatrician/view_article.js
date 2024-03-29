exports.VIEW_articles = "SELECT * FROM `article` LEFT JOIN `paediatrician` ON `article`.`doctor_id`=`paediatrician`.`user_id` LEFT JOIN `article_categories` on `article_categories`.`id`=`article`.`category` WHERE `article`.`doctor_id`=?";
exports.VIEW_all_articles = "SELECT * FROM `article` LEFT JOIN `paediatrician` ON `article`.`doctor_id`=`paediatrician`.`user_id` LEFT JOIN `article_categories` on `article_categories`.`id`=`article`.`category`";
exports.VIEW_single_articles = "SELECT * FROM `article` LEFT JOIN `paediatrician` ON `article`.`doctor_id`=`paediatrician`.`user_id` LEFT JOIN `article_categories` on `article_categories`.`id`=`article`.`category` WHERE `article`.`article_id`=? AND `paediatrician`.`user_id`=?";
exports.VIEW_articles_comments = "SELECT * FROM `article_comments` LEFT JOIN `article` ON `article_comments`.`article_id`=`article`.`article_id` LEFT JOIN `parent` ON `parent`.`user_id`=`article_comments`.`user_id`  WHERE `article_comments`.`article_id`=?";
exports.VIEW_followers = "SELECT * FROM `pediatrician_followers` LEFT JOIN `parent` ON `parent`.`user_id`=`pediatrician_followers`.`user_id` WHERE doctor_id=?";
exports.Trending_article = "SELECT * FROM `article` LEFT JOIN `article_categories` on `article_categories`.`id`=`article`.`category` WHERE `article`.`no_of_likes` = ( SELECT MAX(`article`.`no_of_likes`) FROM article ) AND `article`.`doctor_id`=?;";
exports.no_of_articles = "SELECT COUNT(article_id) FROM `article`  WHERE doctor_id=?";
exports.no_of_article_comments = "SELECT COUNT(comment_id) AS count FROM `article_comments`  WHERE article_id=?";
exports.today_comments="SELECT * FROM `article_comments` LEFT JOIN `article` ON `article_comments`.`article_id`=`article`.`article_id` LEFT JOIN `parent` ON `parent`.`user_id`=`article_comments`.`user_id` WHERE `article_comments`.`date`=?";
exports.no_of_followers = "SELECT COUNT(follower_id) FROM `article`  WHERE doctor_id=?";
exports.block_article_comments = "UPDATE article_comments SET status='1' WHERE `article_comments`.`comment_id` = ?;";
exports.unblock_article_comments = "UPDATE article_comments SET status='0' WHERE `article_comments`.`comment_id` = ?;";
exports.article_categories = "SELECT * FROM `article_categories`;";
exports.editprofile = "UPDATE `paediatrician` SET name=?,description=?,phone_number=?,email=?,linkedin=?,facebook=?,twitter=?,Address=?, WHERE user_id=?;";
exports.insert_article = "INSERT INTO `article` (title,image_1,category,des,doctor_id) VALUES (?,?,?,?,?);";
exports.addQulifications = "INSERT INTO `paediatrician_qualifications` VALUES (?,?,null)";
exports.request_pt_chart1 = "select month(followed_date), count(*) from pediatrician_followers WHERE year(followed_date) = '2022' AND doctor_id=1 group by month(followed_date);";






