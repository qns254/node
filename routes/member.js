const express = require('express');
const router = express.Router();

const member = require('../models/member'); //member model
const { joinValidator } = require('../middlewares/join_validator'); //회원가입 유효성 검사 
const { alert, go } = require('../lib/common"); 
//회원가입 시작
router.route("/join")
         /**회원가입 양식**/
          .get((req, res, next) => {
			  res.render("member/form");
			  
		  })
		  /**회원가입처리**/
		  .post(joinValidator, async(req, res, next) => {
			  try{
			  const result = await member.join(req.body.memId, req.body.memPw);
			  if(result) { //성공
				  
				  return go("/member/login", res, "parent");
			  }
		  }catch(err) {
			  
			  console.error(err);
			  next(err);
		  }
		  return alert("관리자 등록 요청 실패!", res);
		  
		  
		  });
		  //회원가입 끝
		  
		  //로그인시작
router.route("/login")
                //로그인 양식
              .get((req, res, next) => {
				return  res.render("member/login");
			  })
			  //로그인처리
			  .post(joinValidator,async(req, res, next) => {
				  try{
					  
					  const result = await member.login(req.body.memId, req.body.memPw, req);
					  if(result) { //로그인 성공 
						  return go("/admin", res, "parent");
						  
					  }
				  }catch(err){
					  console.error(err);
					  next(err);
					  
				  }
				  //로그인 실패
				  return alert("로그인 실패!", res);
			  });
			  
			  //로그인 끝
			  
			  //로그아웃 시작 
router.get("/logout", (req, res, next) => {
	req.session.destroy();
    res.redirect("/member/login");	
});
			  //로그아웃 끝
			  
module.exports = router;