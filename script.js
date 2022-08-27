function aviso(){
    alert("Projeto feito afim de estudo em breve mais atualizações e melhorias click em OK  o aperte ESC")
}

const Years = " 1 Jan 2023" 

function CountTimer(){
    
    const Daymsg = document.querySelector('.A')
    const Dayhour = document.querySelector('.B')
    const Dayminut = document.querySelector('.C')
    const Daysecs = document.querySelector('.D')

    
    const dateFinsh = new Date( Years) 
    const date = new Date();
    const rest = (dateFinsh - date)/1000

    days= Math.floor(rest/3600/24);
    hours = Math.floor(rest / 3600)%24;
    mins = Math.floor(rest /60)%60;
    secs = Math.floor(rest)%60;

    function formatTime(time){
        return time < 10 ? `0${time}`:time
    }


    Daymsg.innerText=`${days}:` 
    Dayhour.innerText=`${formatTime(hours)}:`
    Dayminut.innerText=`${formatTime(mins)}:`
    Daysecs.innerText=`${formatTime(secs)}`
}

setInterval('CountTimer()',1000)

