const SellerRoute = require("express").Router();
const SellerController = require("../controllers/SellerController.js");

SellerRoute.get("/getAll", SellerController.getAll);
SellerRoute.get("/getOne/:id", SellerController.oneProduct);
SellerRoute.post("/addProduct", SellerController.add);
SellerRoute.put("/updateProduct/:id", SellerController.updateProduct);
SellerRoute.delete("/removeProduct/:id",  SellerController.remove);
SellerRoute.put("/updateProfile/:id", SellerController.updateProfile)

module.exports =SellerRoute;
