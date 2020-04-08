function studentHogwarts() {
	let privateScore = 0;
    let name = null;
    function changeScoreBy(points) {
    	return privateScore += points;
    }
   return {
    setName(newName) {
      return name = newName;
    },
    rewardStudent() {
      return changeScoreBy(1);
    },
    penalizeStudent() {
      return changeScoreBy(-1);
    },
    getScore() {
      return (name + ": "+ privateScore);
    }
  };
}
let harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName("Harry");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());