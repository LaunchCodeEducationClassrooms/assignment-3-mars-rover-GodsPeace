class Rover {
   constructor(position) {
     
     this.position = position;
     this.mode= "Normal";
     this.generatorWatts=110;
  
}
receiveMessage(message) {

let response = new Message(message)
return(response);

} 
}



module.exports = Rover;


