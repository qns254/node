
/**
*
* 공통 함수
*
*/
const commonLib = {
     alert : function(msg, res) {
     /*얼러트 메서지 출력*/
      //param @object res -Response 객체	 
           
		   return res.send(`<script>alert("${msg}");</script>`);
		
	 },
	 //페이지 이동
	 go : function(url, res, target) {
		 target = target || "self";
		 
		 return res.seng(`<script>${target}.location.href='${url}';</script>`);
	 }
	}
	module.exports = commonLib;