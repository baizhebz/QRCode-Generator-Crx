chrome.tabs.query({active: true, currentWindow: true}, function(arrTabs) {
	var url = arrTabs[0].url;
	var qrCode = new QRCode(document.getElementById("qrcode"), {
		text: url,
		width: 128,
		height: 128
	});
	qrCode.clear();
	qrCode.makeCode(url);
});