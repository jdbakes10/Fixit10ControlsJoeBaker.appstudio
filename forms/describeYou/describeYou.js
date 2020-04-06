//Shortcut for favExercises
btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}


rdbDescribe.onclick=function(){
  lblAnswer.value = `I agree you are a ${$("input[name=rdbDescribe]:checked").prop("value")} person.`
}

