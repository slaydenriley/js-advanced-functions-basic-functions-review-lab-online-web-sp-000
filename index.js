function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective() {
  return function(param = "special", flair = "*") {
    return `You are ${flair}${param}${flair}`!;
  }
}
