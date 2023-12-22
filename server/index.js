const express = require("express");
const cors = require("cors");
const conn = require("../database-mysql");
const translateRouteAdmin = require("./routes/routesAdmin/translate.route.admin");
const translateRoutewishList = require("./routes/wishListRoute");
const translateRouteClient1= require("./routes/Client1");
const translateRouteCart = require("./routes/CartRoute");
const translateRouteAuth = require("./routes/LoginAndResigter.routes/authRouters.js");

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use(cors());
app.use("/auth", translateRouteAuth);
app.use("/admin", translateRouteAdmin);
app.use("/Cart", translateRouteCart);
app.use("/Client1", translateRouteClient1);
app.use("/wishList", translateRoutewishList);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
