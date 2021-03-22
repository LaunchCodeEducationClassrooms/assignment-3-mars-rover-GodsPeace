class Rover {
   constructor(position) {
     
     this.position = position;
     this.mode= "Normal";
     this.generatorWatts=110;
  
}

receiveMessage(message) {


for (const command of message.commands){
    if(command.commandType == 'MOVE'){
      }if(this.mode == 'LOW_POWER'){
        results.push({completed: false});
      }else{
        result.push({completed: true})
         this.position = command.value
      }  
      
       if(command.commandType == 'STATUS_CHECK'){
      results.push({completed:true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position : this.position}})
    }
}
   
return {message: message.name, results: []}

}

module.exports = Rover;

