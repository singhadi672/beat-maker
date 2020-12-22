class DrumKick{
    constructor(){
        this.pads = document.querySelectorAll(".pads");
        this.playButton = document.querySelector(".play");
        this.kickAudio = document.querySelector(".kick-audio");
        this.snareAudio = document.querySelector(".snare-audio");
        this.clapAudio = document.querySelector(".clap-audio");
        this.hihatAudio = document.querySelector(".hihat-audio");
        this.shakerAudio = document.querySelector(".shaker-audio");
        this.range = document.querySelector(".range");
        this.selects = document.querySelectorAll("select");
        this.muteAudio = document.querySelectorAll(".mute");
        
        this.index = 0;
        this.beats = 60;

        this.isPlaying = null;
    }

    updateValue(val){
        this.beats = val;
        this.range.innerHTML = this.beats;
    }

    addActive(){
        this.classList.toggle("active");
    }

    step(){
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b0${step}`);
        activeBars.forEach(bar=>{

            bar.style.animation = `playtrack 0.3s alternate ease-in-out 2`;

            if(bar.classList.contains("active")){
                if(bar.classList.contains("kick-pad")){
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();

                }
                if(bar.classList.contains("snare-pad")){
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains("clap-pad")){
                    this.clapAudio.currentTime = 0;
                    this.clapAudio.play();
                }
                if(bar.classList.contains("hihat-pad")){
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
                if(bar.classList.contains("shaker-pad")){
                    this.shakerAudio.currentTime = 0;
                    this.shakerAudio.play();
                }
            }
        })
        this.index++;
    }

    muteAudioButton(e){
        e.target.classList.toggle("active");

        const trackId = e.target.getAttribute("data-track");
        if(e.target.classList.contains("active")){
            switch(trackId){
                case "0":
                    this.kickAudio.volume = 0;
                    break;
                case "1":
                    this.clapAudio.volume = 0;
                    break;
                case "2":
                    this.snareAudio.volume = 0;
                    break;
                case "3":
                    this.hihatAudio.volume = 0;
                    break;
                case "4":
                    this.shakerkAudio.volume = 0;
                    break;
            }
        }else{
            switch(trackId){
                case "0":
                    this.kickAudio.volume = 1;
                    break;
                case "1":
                    this.clapAudio.volume = 1;
                    break;
                case "2":
                    this.snareAudio.volume = 1;
                    break;
                case "3":
                    this.hihatAudio.volume = 1;
                    break;
                case "4":
                    this.shakerkAudio.volume = 1;
                    break;
                }
        }
    }

    start(){
        let bpm = (60/this.beats)*1000;

        if(!this.isPlaying){    
            this.isPlaying = setInterval(()=>{
            this.step();
             },bpm);
             this.playButton.innerHTML = "Stop!!";
        }
        else{
            clearInterval(this.isPlaying);
            this.isPlaying = null;
            this.playButton.innerHTML = "Play!";
        }
    }

    selectAudio(e){
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch(selectionName){
            case "kick-select" :
                this.kickAudio.src = selectionValue;
                break;
            case "clap-select" :
                this.clapAudio.src = selectionValue;
                break;
            case "snare-select" :
                this.snareAudio.src = selectionValue;
                break;
            case "hihat-select" :
                this.hihatAudio.src = selectionValue;
                break;
            case "shaker-select" :
                this.shakerAudio.src = selectionValue;
                break;
            
        }
        
    }

}


let drumstick  = new DrumKick();

drumstick.pads.forEach(pad=>{
    pad.addEventListener("click",drumstick.addActive);
    pad.addEventListener("animationend",function(){
        pad.style.animation = "";
    })
})

drumstick.selects.forEach(select=>{
    select.addEventListener("change",(e)=>{
        drumstick.selectAudio(e);
    })
})


drumstick.playButton.addEventListener("click",()=>{
    drumstick.start();
})

drumstick.muteAudio.forEach(mute=>{
    mute.addEventListener("click",(e)=>drumstick.muteAudioButton(e))
})




