const express = require('express');

const router = express.Router();

router.route("/join")
         /**회원가입 양식**/
          .get((req, res, next) => {
			  res.render("member/form");
			  
		  })
		  /**회원가입처리**/
		  .post((req, res, next) => {

		  });
module.exports = router;