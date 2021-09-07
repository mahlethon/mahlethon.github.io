let student1 = {
    studentId: "s101",
    quizAnswers: [1, 1, 2,4]

};
let student2 = {
    studentId: "s102",
    quizAnswers: [1, 1, 2,4]
};
let student3 ={
    studentId: "s103",
    quizAnswers: [3, 1, 3,4] 
};
let quiz = [student1, student2, student3];


function collectAnswers(n, arr){
    let ans = [];
for(let std in arr ){
    ans.push(std[quizAnswers][n]);
}
return ans;
}

console.log(quiz);