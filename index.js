const changeBgColor = ()=>{
    const bgcolor = document.getElementById("bgcolor").value
    console.log(bgcolor)
    document.body.style.backgroundColor = bgcolor
}

const changeTextColor = ()=>{
    const textcolor = document.getElementById("textcolor").value
    console.log(textcolor)
    document.getElementById("tx").style.color = textcolor
}

const changename = ()=>{
    const name = document.getElementById("nui").value
    console.log(name)
    document.getElementById("tx").textContent = "Hello "+ name + "さん!"
}