const lectMembers = ["Yoo", "Kim", "Son", "Lee", "Lee"];

class Lecture {
  constructor(hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

const lectureInfoF = new Lecture(false, "L001", lectMembers);
const lectureInfoT = new Lecture(true, "L002", lectMembers);

function getStudent(instance){
  let {hasTutor, lectID, members} = instance;
  let tutor,student;

  hasTutor ? [tutor, ...student] = members : student = members; 
  console.log(`강의 : ${lectID}, 강의자 : ${tutor}, 수강생 : ${student}`);

  // if(isTutor === true){
  //   let [tutor, ...student] = members; 
  //   console.log(`강의 : ${lectID}, 강의자 : ${tutor}, 수강생 : ${student}`);
  // }
  // else{
  //   let student = members;
  //   console.log(`강의 : ${lectID}, 수강생 : ${student}`);
  // }
};

getStudent(lectureInfoF);
getStudent(lectureInfoT);