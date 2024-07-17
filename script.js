function getFormvalue() {
    //Write your code here
	const name = document.querySelectorAll("input");
	let fn = name[0].value;
	let ln = name[1].value;
	let  fullnm = fn+" "+ln;
	console.log(fullnm)
	alert(fullnm)

}
