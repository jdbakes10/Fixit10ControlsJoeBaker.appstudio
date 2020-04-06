var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
var totalExercises = exercises.concat(coreExercises)

favExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i <= totalExercises.length - 1; i++) {
    selExercises.addItem(totalExercises[i]) }
}

selExercises.onfocusout=function(){

}


btnSubmitEx.onclick=function(){
if (selExercises.value == "situps,plank") {
  NSB.MsgBox("You chose situps and planks. Those are the two core exercises")
} else {
  NSB.MsgBox("You didn't pick the two core exercises")  
  }
}

