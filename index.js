function takeANumber(katzDeliLine, name){
var lineNum= katzDeliLine.length+1;
katzDeliLine.push(name);
return ("Welcome, " + name + ". You are number " + lineNum + " in line.");
}

function nowServing(serving){
if (serving.length === 0){
  return "There is nobody waiting to be served!"
} else{
  var serve= serving.shift();
return ("Currently serving " + serve + ".")
}
}

function currentLine(deliLine){
if (deliLine.length === 0){
  return "The line is currently empty."
}else{
  var line = deliLine.
  for(var i=0; i<deliLine;i++){
  return("The line is currently: " + line)
  }
}