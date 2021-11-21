//You'll have to make two passes: 
//one to get the longest length of an array of instructors, and the other to filter the instructors by longest length.

const instructorWithLongestName = function(instructors) {
  let longName = instructors[0].name.length
  let name = '';
  for (let i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > longName) {
      longName = instructors[i].name.length;
      name = instructors[i].name;
      course = instructors[i].course;
    }
  }
  return {'name': name, 'course': course}
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
