
/**
*
* 프로필 사진 업로드 처리 
*
* @ param boolean issuccess-true  업로드 성공
*/

function uploadCallback(isSuccess)
{
	/** 1.프로필 사진 -> 사진 추가 영역에 붙여 놓고
	    2.레이어 팝업 닫기 
		실패시 1,업로드 실패 메세지 출력 후 레이어 팝업 닫기 */
		
		if (isSuccess) {
			const tag = `<img src='/profile/profile'>`;
			$(".photo_upload").html(tag);
			
			
		}else {//실패
		
		alert("이미지 업로드 실패");
		}
		layer.close();
	
}

$(function() {
	/**파일 업로드 처리*/
	$("body").on("change".".upload_box input[type='file']", function() {
		 frmUpload.submit
	});
	/** 주소 검색 */
	$(".search_address").click(function() {
		 new daum.Postcode({
			oncomplete: function(data) {
				$("input[name='address']").val(data.address);
			}
		}).open();
	});
});