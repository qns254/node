const express = require('express');
const router = express.Router();

const member = require('../models/member'); //member model
const { joinValidator } = require('../middlewares/join_validator'); //회원가입 유효성 검사 
router.route("/join")
         /**회원가입 양식**/
          .get((req, res, next) => {
			  res.render("member/form");
			  
		  })
		  /**회원가입처리**/
		  .post(joinValidator, async(req, res, next) => {
			  try{
			  const result = await member.join(req.memId, req.memPw);
		  }catch(err) {
			  
			  console.error(err);
			  next(err);
		  }
		  });
module.exports = router;