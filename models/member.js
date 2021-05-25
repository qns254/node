const { sequelize, Sequelize : { QueryTypes } } = require("./index");
const bcrypt = require('bcrypt');

/**
* member Model 
*
*/
const member = {
	/**
	* 관리자 등록 요청 처리 
	*
	* @param String memId 아이디
	* @param String memPw 비밀번호
	* 
	* @return Boolean
	*/
	join : async function (memId, memPw) {
		const hash = await bcrypt.hash(memPw, 10);
		
		const sql = "INSERT INTO member (memId, memPw) VALUES (:memId, :memPw)";
		
		const result = await sequelize.query(sql, {
			replacements : { memId, memPw : hash },
			type : QueryTypes.INSERT,
		});
			
		console.log(result);
		
		
		
	},
	login : async function(memId, memPw, req) {
		const sql = "SELECT * FROM member WHERE memId = ? AND isAdmin=1";
	   const rows = await sequelize.query(sql, {
              replacements : [memId],
			  type : QueryTypes.SELECT,
          
       });		 

         if (rows.length == 0) { //회원이 존재 x
           return false;

         }			 
		//회원이 존재하면 비밀번호 일치여부 체크
		const match = await bcrypt.compare(memPw, rows[0].memPw);
		if (match) { //비밀번호 일치 -로그인 처리
			req.session.memId = row[0].memId;
			return true;
			
		}
		
		return false;
	},
	
	
	
};

module.exports = member;