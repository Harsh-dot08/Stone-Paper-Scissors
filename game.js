let choices=document.querySelectorAll(".elements")
let msgh=document.querySelector("#msh")
let msg=document.querySelector(".msg")
let styt=document.querySelector("#you")
let stct=document.querySelector("#comp")
let exit=document.querySelector("#exit");
let reset=document.querySelector("#reset");
let last=document.querySelector(".classe");
let hii=document.querySelector(".hii");
let w=document.querySelector(".wins");
let d=document.querySelector(".draw");
let l=document.querySelector(".loo");
let lmsg=document.querySelector("#yu");
let news=document.querySelector("#new");
let begi=document.querySelector("#begins")
begi.addEventListener("click",()=>{
    en();
    reset.classList.remove("hide");
    exit.classList.remove("hide");
    begi.classList.add("hide")

})
const dis=()=>{
    for(choiced of choices ){
        choiced.disabled=true;
    }
}
dis();
const en=()=>{
    for(c of choices ){
        c.disabled=false;
    }
}

news.addEventListener("click",()=>{
    user=true;
    sy=0;
    cy=0;
    begi.classList.remove("hide")
    dis();
    hii.classList.remove("hide");
    last.classList.add("hide")
    w.classList.add("hide")
    l.classList.add("hide")
    d.classList.add("hide")
    styt.innerText=sy;
    stct.innerText=cy;
    msg.classList.add("hide");
    reset.classList.add("hide");
    exit.classList.add("hide")
})
reset.classList.add("hide");
exit.classList.add("hide")
reset.addEventListener("click",()=>{
    dis();
    user=true;
    sy=0;
    cy=0;
    styt.innerText=sy;
    stct.innerText=cy;
    msg.classList.add("hide");
    reset.classList.add("hide");
    exit.classList.add("hide")
    begi.classList.remove("hide")
})
last.classList.add("hide")
exit.addEventListener("click",()=>{
    hii.classList.add("hide");
    last.classList.remove("hide")
    if(sy>cy){
        lmsg.innerText="You win"
        w.classList.remove("hide")
    }else if(sy==cy){
        lmsg.innerText="It's a Draw"
        d.classList.remove("hide")
    }else{
        lmsg.innerText="You lose"
        l.classList.remove("hide")
    }
})
let sy=0;
let cy=0;
msg.classList.add("hide")
const gen=()=>{
    const options=["stone","paper","scissor"]
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}
let user=true;
const check=(choi,com)=>{
    if(user){
        sy=sy+1
        styt.innerText=sy;
        msgh.innerText=`It was ${choi} and ${com}! You win`
        msg.classList.remove("hide");
    }else{
        cy=cy+1
        stct.innerText=cy;
        msgh.innerText=`It was ${choi} and ${com}! Computer win`
        msg.classList.remove("hide");
    }
}
const playgame=(choic)=>{
    const comp=gen();
    if (choic==comp){
        msgh.innerText=`It was ${choic} and ${comp}! Hence it is a Draw`
        msg.classList.remove("hide");
    }else{
        if(choic=="paper"){
            if(comp=="stone"){
                user=true;
            }else{
                user=false;
            }
        }else if(choic=="stone"){
            if(comp=="scissor"){
                user=true;
            }else{
                user=false;
            }
        }else{
            if(comp=="paper"){
                user=true;
            }else{
                user=false;
            }
        }
        check(choic,comp);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const ide=choice.getAttribute("id");
        playgame(ide);
    })
})