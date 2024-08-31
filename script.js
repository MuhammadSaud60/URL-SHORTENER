function generateShortForm(){
    const chars = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shortURL =  '';


    for(let i=0; i<5; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        shortURL += chars[randomIndex];
        console.log(shortURL)
    }
    

    return shortURL
}

function longToShort(){
    const URL  = document.getElementById("URL").value.trim();
    const result = document.getElementById("result");

    if(URL.length > 8){
       const shortForm = generateShortForm()
       const protocol = URL.substring(0, URL.indexOf("://") + 3)
        result.innerHTML = `<a href=${URL} target='_blank'>${protocol}${shortForm}</a>`;
    }

    else{
        result.innerHTML = "Please Enter Valid URL";
    }
}

//enabling enter key
function checkEnterKey(event){
    if(event.key === 'Enter'){
        longToShort()
    }
}