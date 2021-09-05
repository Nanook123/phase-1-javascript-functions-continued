
function saturdayFun(activity = "roller-skate") {

    return (`This Saturday, I want to ${activity}!`)


}

saturdayFun("bathe the dog")

function mondayWork(work = `go to the office`) {
    return `This Monday, I will ${work}.`
}

mondayWork(`work from home`)

let wrapAdjective = function(star = "*"){
    return function(adjective = "da-best"){
        return `You are ${star}${adjective}${star}!`
    }

}
wrapAdjective()(adjective)
 