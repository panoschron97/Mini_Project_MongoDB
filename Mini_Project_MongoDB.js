//As Admin Connection

use MiniProject;

db.createCollection("Collection1");

db.Collection1.insert({"_id" : 1, "First_Name" : "Panagiotis", "Last_Name" : "Chronopoulos"});

db.Collection1.insertOne({"_id" : 2, "First_Name" : "Stavros", "Last_Name" : "Piperis"});

db.Collection1.insertMany([{"_id" : 3, "First_Name" : "Antreas", "Last_Name" : "Theodoropoulos"},
{"_id" : 4, "First_Name" : "Andromaxi", "Last_Name" : "Ksidi"},
{"_id" : 5, "First_Name" : "Maria", "Last_Name" : "Stavropoulou"},
{"_id" : 6, "First_Name" : "Annita", "Last_Name" : "Georgakopoulou"},
{"_id" : 7, "First_Name" : "Xristos", "Last_Name" : "Koutsikos"},
{"_id" : 8, "First_Name" : "Anastasios", "Last_Name" : "Vagenas"},
{"_id" : 9, "First_Name" : "Nikos", "Last_Name" : "Christopoulos"},
{"_id" : 10, "First_Name" : "Gewrgia", "Last_Name" : "Koutroulia"},
{"_id" : 11, "First_Name" : "Aleksandros", "Last_Name" : "Spyropoulos"},
{"_id" : 12, "First_Name" : "Kyriakos", "Last_Name" : "Athanasiou"},
{"_id" : 13, "First_Name" : "Spyros", "Last_Name" : "Nikolopoulos"},
{"_id" : 14, "First_Name" : "Stefanos", "Last_Name" : "Delasiotis"},
{"_id" : 15, "First_Name" : "Stelios", "Last_Name" : "Tsitsikas"},
{"_id" : 16, "First_Name" : "Nefeli", "Last_Name" : "Mixalopoulou"},
{"_id" : 17, "First_Name" : "Tzortzina", "Last_Name" : "Aleksopoulou"},
{"_id" : 18, "First_Name" : "Kwnstantina", "Last_Name" : "Athanasopoulou"},
{"_id" : 19, "First_Name" : "Silia", "Last_Name" : "Kerasopoulou"},
{"_id" : 20, "First_Name" : "Swthria", "Last_Name" : "Chronopoulou"}]);

db.Collection1.countDocuments({});

//db.Collection1.createIndex({"First_Name" : 1}, {"name" : "First_Name"});

//db.Collection1.createIndex({"Last_Name" : 1}, {"name" : "Last_Name"});

db.Collection1.createIndex({"First_Name" : 1, "Last_Name" : 1}, {"name" : "First_Name_Last_Name"});

//db.Collection1.createIndexes([{"First_Name" : 1}, {"Last_Name" : 1}, {"First_Name" : 1, "Last_Name" : 1}]);

db.Collection1.find({});

db.Collection1.find(({}), {"_id" : 1});

db.Collection1.find(({}), {"_id" : 0, "First_Name" : 1});

db.Collection1.find(({}), {"_id" : 0, "Last_Name" : 1});

db.Collection1.find(({}), {"_id" : 0, "First_Name" : 1, "Last_Name" : 1});

db.Collection1.find(({}), {"_id" : 1, "First_Name" : 1, "Last_Name" : 1});

use MiniProject;

db.createCollection("Collection2");

db.Collection2.insert([{"Age" : 28, "Salary" : 1000, "Phone" : [6970691060, 6970691061], "Country" : [{"Greece" : {"Town" : "Athens"}, "Germany" : {"Town" : "Berlin"}}], "_id" : 1},
{"Age": 25, "Salary": 2500, "Phone": [6970691020, 6970691021], "Country": [{"Greece": {"Town": "Thessaloniki"}, "Spain": {"Town": "Madrid"}}], "_id": 2},
{"Age": 30, "Salary": 3000, "Phone": [6970691022, 6970691023], "Country": [{"Italy": {"Town": "Rome"}, "France": {"Town": "Paris"}}], "_id": 3},
{"Age": 25, "Salary": 1500, "Phone": [6970691024, 6970691025], "Country": [{"Portugal": {"Town": "Lisbon"}, "Sweden": {"Town": "Stockholm"}}], "_id": 4},
{"Age": 28, "Salary": 4500, "Phone": [6970691026, 6970691027], "Country": [{"Norway": {"Town": "Oslo"}, "Finland": {"Town": "Helsinki"}}], "_id": 5},
{"Age": 28, "Salary": 4500, "Phone": [6970691028, 6970691029], "Country": [{"Belgium": {"Town": "Brussels"}, "Netherlands": {"Town": "Amsterdam"}}], "_id": 6},
{"Age": 40, "Salary": 5100, "Phone": [6970691030, 6970691031], "Country": [{"Austria": {"Town": "Vienna"}, "Switzerland": {"Town": "Zurich"}}], "_id": 7},
{"Age": 40, "Salary": 2800, "Phone": [6970691032, 6970691033], "Country": [{"Denmark": {"Town": "Copenhagen"}, "Ireland": {"Town": "Dublin"}}], "_id": 8},
{"Age": 33, "Salary": 4000, "Phone": [6970691034, 6970691035], "Country": [{"Canada": {"Town": "Toronto"}, "USA": {"Town": "New York"}}], "_id": 9},
{"Age": 29, "Salary": 3000, "Phone": [6970691036, 6970691037], "Country": [{"Australia": {"Town": "Sydney"}, "New Zealand": {"Town": "Wellington"}}], "_id": 10},
{"Age": 29, "Salary": 3800, "Phone": [6970691038, 6970691039], "Country": [{"Mexico": {"Town": "Mexico City"}, "Brazil": {"Town": "Rio de Janeiro"}}], "_id": 11},
{"Age": 36, "Salary": 2100, "Phone": [6970691040, 6970691041], "Country": [{"South Africa": {"Town": "Cape Town"}, "Nigeria": {"Town": "Lagos"}}], "_id": 12},
{"Age": 36, "Salary": 4700, "Phone": [6970691042, 6970691043], "Country": [{"India": {"Town": "Mumbai"}, "Pakistan": {"Town": "Karachi"}}], "_id": 13},
{"Age": 38, "Salary": 5300, "Phone": [6970691044, 6970691045], "Country": [{"Russia": {"Town": "Moscow"}, "Ukraine": {"Town": "Kyiv"}}], "_id": 14},
{"Age": 26, "Salary": 2400, "Phone": [6970691046, 6970691047], "Country": [{"Argentina": {"Town": "Buenos Aires"}, "Chile": {"Town": "Santiago"}}], "_id": 15},
{"Age": 26, "Salary": 3900, "Phone": [6970691048, 6970691049], "Country": [{"Egypt": {"Town": "Cairo"}, "Morocco": {"Town": "Casablanca"}}], "_id": 16},
{"Age": 41, "Salary": 5600, "Phone": [6970691050, 6970691051], "Country": [{"Japan": {"Town": "Tokyo"}, "South Korea": {"Town": "Seoul"}}], "_id": 17},
{"Age": 23, "Salary": 2100, "Phone": [6970691052, 6970691053], "Country": [{"Thailand": {"Town": "Bangkok"}, "Vietnam": {"Town": "Hanoi"}}], "_id": 18},
{"Age": 34, "Salary": 5100, "Phone": [6970691054, 6970691055], "Country": [{"Singapore": {"Town": "Singapore"}, "Malaysia": {"Town": "Kuala Lumpur"}}], "_id": 19},
{"Age": 34, "Salary": 5100, "Phone": [6970691056, 6970691057], "Country": [{"Philippines": {"Town": "Manila"}, "Indonesia": {"Town": "Jakarta"}}], "_id": 20}]);
 
db.Collection2.countDocuments({});
 
//db.Collection2.createIndexes([{"Age" : 1}, {"Salary" : 1}, {"Phone" : 1}, {"Country" : 1}]);

db.Collection2.createIndexes([{"Age" : 1, "Salary" : 1, "Phone" : 1}]);

db.Collection2.createIndexes([{"Age" : 1, "Salary" : 1, "Country" : 1}]);

db.Collection2.find({});

db.Collection2.find(({}), {"_id" : 1});

db.Collection2.find(({}), {"_id" : 0, "Age" : 1});

db.Collection2.find(({}), {"_id" : 0, "Salary" : 1});

db.Collection2.find(({}), {"_id" : 0, "Phone" : 1});

db.Collection2.find(({}), {"_id" : 0, "Country" : 1});

db.Collection2.find(({}), {"_id" : 0, "Age" : 1, "Salary" : 1});

db.Collection2.find(({}), {"_id" : 0, "Age" : 1, "Salary" : 1, "Phone" : 1});

db.Collection2.find(({}), {"_id" : 0, "Age" : 1, "Salary" : 1, "Country" : 1});

use MiniProject;

db.Collection1.findOne({"_id" : 20}, {"_id" : 0, "First_Name" : 1, "Last_Name" : 1});

db.Collection1.updateOne({"_id" : 20}, {"$set" : {"First_Name" : "Lidia", "Last_Name" : "Christopoulou"}});

db.Collection1.findOne({"_id" : 20}, {"_id" : 0, "First_Name" : 1, "Last_Name" : 1});

db.Collection1.findOne({"_id" : 20}, {"_id" : 0, "First_Name" : 1, "Last_Name" : 1});

db.Collection1.deleteOne({"_id" : 20});

db.Collection1.findOne({"_id" : 20}, {"_id" : 0, "First_Name" : 1, "Last_Name" : 1});

use MiniProject;

db.Collection2.find({"$or" : [{"Salary" : {"$gte" : 5100}}, {"_id" : 20}]}, {"_id" : 0});

db.Collection2.updateMany({"Salary" : {"$gt" : 5000}}, {"$inc" : {"Salary" : 1000}});

db.Collection2.find({"$or" : [{"Salary" : {"$gte" : 5100}}, {"_id" : 20}]}, {"_id" : 0});

db.Collection2.find({"$or" : [{"Salary" : {"$gte" : 5100}}, {"_id" : 20}]}, {"_id" : 0});

db.Collection2.deleteMany({"Salary" : {"$gt" : 5000}});

db.Collection2.find({"$or" : [{"Salary" : {"$gte" : 5100}}, {"_id" : 20}]}, {"_id" : 0});

use MiniProject;

db.createUser({"user" : "user", "pwd" : "user", "roles" : []});

db.createRole({"role" : "GivePrivilegesToUser", "privileges" : [], "roles" : []}, {"w" : "majority", "wtimeout" : 5000});

db.grantPrivilegesToRole("GivePrivilegesToUser", 
[{"resource" : { db: "MiniProject", "collection" : "Collection1"}, actions: ["find"]},
{"resource" : { db: "MiniProject", "collection" : "Collection2"}, actions: ["find"]}]);

db.grantRolesToUser("user", [{"role" : "GivePrivilegesToUser", "db" : "MiniProject"}], {"w" : "majority" , "wtimeout" : 4000});

//As User Connection

use MiniProject;

db.Collection1.find({}).limit(5).skip(1).sort({"_id" : -1});

db.Collection2.find({"$or" : [{"Salary" : {"$lte" : 2000}}, {"Age" : {"$lte" : 25}}]}, {"_id" : 0}).sort({"Salary" : 1, "Age" : 1});

db.Collection2.find({"$and" : [{"Salary" : {"$lte" : 2000}}, {"Age" : {"$lte" : 25}}]}, {"_id" : 0}).sort({"Salary" : 1, "Age" : 1});

db.Collection1.aggregate([{"$project" : {"Full_Name" : {"$concat" : ["$First_Name", " ", "$Last_Name"]}}}]);

db.Collection2.aggregate([{"$match" : {"Age" : 28}}, {"$group" : {"_id" : "$Age", "Total_Salary" : {"$sum" : "$Salary"}}}]);

// As admin Connection

use MiniProject;

db.revokeRolesFromUser("user", [{"role" : "GivePrivilegesToUser", "db" : "MiniProject" }], {"w" : "majority"});

db.revokePrivilegesFromRole("GivePrivilegesToUser",
[{"resource" : {"db" : "MiniProject", "collection" : "Collection1"}, "actions" : ["find"]}, 
{"resource" : { "db" : "MiniProject", "collection" : "Collection2"}, "actions" : ["find"]}]);

db.getRoles({});

db.dropAllRoles({});

db.getRoles({});

db.getUsers({});

db.dropUser("user");

db.getUsers({});

db.Collection2.getIndexes({});

db.Collection2.dropIndexes();

db.Collection2.getIndexes({});

db.Collection2.remove({});

db.Collection2.drop({});

db.Collection1.getIndexes({});

db.Collection1.dropIndexes();

db.Collection1.getIndexes({});

db.Collection1.remove({});

db.Collection1.drop({});

use admin;