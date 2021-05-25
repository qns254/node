/**member model
*
*
*/
const { sequelize, Sequelize : { QueryTypes } } = require("./index");
const bcrypt = require("bcrypt");

const member = {
	/*
	*관리자 등록 요청 처리
	*
	* @param string memId 아이디 
	  @param string memPw 비밀번호 '
	  
	 * @return boolean
	*/
	join : async function (memId, memPw) {
		
		const hash = await bcrypt.hash(memPw, 10);
		
		const sql = "INSERT INTO member ( memId, memPw) VALUES (:memId, :memPw)"
		const result = await sequelize.query(sql, {
			replacement : { memId, memPw : hash },
			types : QueryTypes.INSERT,
		});
		console.log(result);
	},
};


module.exports = member;