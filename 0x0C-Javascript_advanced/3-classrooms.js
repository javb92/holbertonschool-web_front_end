function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
    	return (()=>{return (seat)})
    }
    let students = [];
    for (let x=0; x < numbersOfStudents;x++) {
        students.push(studentSeat(x+1));
    }
    return students;
}
let classRoom = createClassRoom(10);