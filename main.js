const createStudent = (name, grade) => {
    const student = {
        name:name,
        grade:grade
    }
    return student
}

const addMathGrade = (pupil,score) => {
    pupil.math = score
    return pupil
}

const addHistoryGrade = (pupilMath,score) => {
    pupilMath.history = score
    return pupilMath
}

const addScienceGrade = (pupilHistory, score) => {
    pupilHistory.science = score
    return pupilHistory
}

const pupil = createStudent('John',8)
const pupilMath = addMathGrade(pupil,'B')
const pupilHistory = addHistoryGrade(pupilMath,'C')
const pupilScience = addScienceGrade(pupilHistory,'A')

console.log(pupil)
