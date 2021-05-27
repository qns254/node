  
/**
* 이력서 관리 페이지
*/
const resume = require("../models/resume");
const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
	const params = {
		addClass : 'admin_page',
	};
	return res.render("admin/main", params);
});

router.post("/profile", async(req, res, next) => {
       const result = await resume.update(req.body)
	   
     res.send("");	   
	
});


module.exports = router;