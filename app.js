class DrumKick{
    constructor(){
        this.pads = document.querySelectorAll(".pads");
        this.kickAudio = document.querySelector(".kick-audio");
        this.snareAudio = document.querySelector(".snare-audio");
        this.clapAudio = document.querySelector(".clap-audio");
        this.hihatAudio = document.querySelector(".hihat-audio");
        this.shakerAudio = document.querySelector(".shaker-audio");
        
        this.index = 0;
        this.beats = 60;
    }

    step(){
        let step = this.index % 8;
        console.log(step);
        this.index++;
    }

    start(){

        let bpm = (60/this.beats)*1000;

        setInterval(()=>{
            this.step();
        },bpm);
    }
}


let drumstick  = new DrumKick();


drumstick.start();







function updateTextInput(val) {
   console.log(val); 
  }



