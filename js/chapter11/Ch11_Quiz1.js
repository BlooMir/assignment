const lectMembers_NoYoo = ["Kim", "Son", "Lee", "Lee"];
const lectMembers = ["Yoo", "Kim", "Son", "Lee", "Lee"];

class Lecture {
  constructor(hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

const lectureInfoF = new Lecture(false, "L001", lectMembers_NoYoo);
const lectureInfoT = new Lecture(true, "L002", lectMembers);

function getStudent(instance){
  let {isTutor, lectID, members} = instance;

  if(isTutor === true){
    let [tutor, ...student] = members;
    console.log(`강의 : ${lectID}, 수강생 : ${tutor} ${members}`);
  }
  else{
    let student = members;
    console.log(`강의 : ${lectID}, 수강생 : ${members}`);
  }
};

getStudent(lectureInfoF);
getStudent(lectureInfoT);