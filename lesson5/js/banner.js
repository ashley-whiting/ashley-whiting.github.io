function bannerad(){
    let now = new Date();
    let dayOfWeek = now.getDay();

    if(dayOfWeek == 5){
        document.getElementById("banner").classList.toggle("hide");
    }

    else{}
}