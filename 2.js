const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
 
//2.a

//checking whether the user's score is greater than 85
//arr- users item -user
const scoresGreaterThan85 = (arr) => arr.filter((item) => item.scores > 85);
console.log(scoresGreaterThan85(users));

//2.b
const addUser = (arr, name, scores, skills, age) => {
  //The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if it finds an array element that passes the test. Otherwise it returns false.
  const existing = arr.some((item) => item.name === name);
  // console.log("e",existing);
  //if user doesnt exists then add the user to the array
  existing
    ? console.log("user already exists")
    : arr.push({ name, scores, skills, age });
  return arr;
};
console.log(addUser(users, "Jasee", 85, [], 18));
 
//2.c

const addUserSkill = (arr, name, skills) => {
  //The find() method returns the first element in the provided array that passes the provided function =>user object
  const existing = arr.find((item) => item.name === name);
  const eSkills = existing.skills; 
  //if the user exists then add the skills to the user
  //to change the skills we need a mutable merge so we use the spread operator without creating new array
  existing ?eSkills.push(...skills) : console.log("user does not exist");
  return arr;
};
console.log(addUserSkill(users, "Jasee", ["PHP","JS","JS"]));

//2.d
const editUser = (arr, name, scores, skills, age) => {
  //checks for user
  const existing = arr.find((item) => item.name === name);
  //if user exists then edit the user
  existing && (existing.scores = scores) &&  (existing.skills = skills) && (existing.age = age) 
  return arr;
}
console.log(editUser(users, "Jasee", 79, ["NODE"], 22));


