console.log("Start of the execution queue");
setTimeout(function(){ console.log("Final code block to be executed"); }, 0000);
for (let x = 1; x <= 100 ;x++) {
	console.log(x);
}
console.log("End of the loop printing");