$.fn.html = function(htmlString) {
	if(htmlString){
		return this.each(function(){
			// htmlString 인자를 전달받는 다면 체이닝 가능하도록 리턴
			this.innerHTML = htmlString;
		});
	} else {
		// 인자가 없다면 첫번쨰 개체의 innerHTML 반환
		return this[0].innerHTML
	}
}

// html()과 유사
$.fn.text = function(textString){
	if(textString){
		return this.each(function(){
			this.textContent = textString;
		});
	} else {
		return this[0].textContent.trim();
	}
}

$.fn.append = function(stringOrObject){
	return this.each(function(){
		if(typeof stringOrObject === 'string') {
			// 문자열이므로 요소 끝나기 전에 삽입
			this.insertAdjacentHTML('beforeend', stringOrObject)
		} else {
			// 인자가 객체일 경우 this를 that으로 할당하여 고정(아래 코드에서 this가 바뀌므로)
			var that = this;
			// key, obj 전달
			$(stringOrObject).each(function(key, obj){
				that.insertAdjacentHTML('beforeend', obj.outerHTML);
			});
		}
	})
}