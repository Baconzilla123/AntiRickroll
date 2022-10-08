document.getElementById('acceptRisk').onclick = acceptRisk;

function acceptRisk() {
	sessionStorage.setItem("bypassAntiRickroll", true)
	history.go(-1);
}