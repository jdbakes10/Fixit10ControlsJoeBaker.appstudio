let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lstFavFoods.clear()
  
  for (i=0; i <= goodFoods.length -1; i ++)
        lstFavFoods.addItem(goodFoods[i])
}

lstFavFoods.onclick=function(){
  if (typeof(choice) == "object") {
  return
} else {
  let textChoice = NSB.$("lstFavFoods_" + choice).textContent
  lblFood.value = `You picked ${textChoice}- that is a great choice!`
}
}

//shortcut
btndessertVoting.onclick=function(){
  ChangeForm(dessertVoting)
}

