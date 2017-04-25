function changeLink() {
    var alink = document.getElementsByClassName("icon icon-home")[0];
	if (alink instanceof HTMLAnchorElement) {
		alink.href = "https://coinpit.io"
    alink.innerHTML = "<br>coinpit.io"
	}
}
window.onload = changeLink;
