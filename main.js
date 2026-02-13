var letterContent = 
"Đà Nẵng, ngày 14 tháng 2 năm 2026\n" + 
"Gửi người yêu của anh,\n" + 
"Đây là Valentine đầu tiên mình có nhau, nhưng lại chẳng thể ở bên nhau. Không sao, em hãy tin rằng phía bên kia màn hình của em vẫn luôn có người cố gắng từng ngày, không chỉ vì bản thân mà còn vì mục tiêu dài hạn là \"đưa nàng về dinh\" ^^. \n"
+ "Em ơi dù mai sau.\n" + "Dù có gió mưa xô nghiêng vào đầu.\n" + "Em ơi em nhớ nắm tay anh qua thương đau ~~\n" +
"Mong em sẽ mỉm cười khi đọc được những dòng chữ vụng về mà anh vẽ nên. Anh yêu Vi rất nhiều!\n" + "Hôm nay cho anh một lần được làm Lý Tuân của đời em nhé Vi =)))"

durationWrite = 50 

function effectWrite() {

    var boxLetter = document.querySelector(".letterContent")

    let lines = letterContent.split("\n")

    boxLetter.innerHTML += `<div class="date">${lines[0]}</div>`

    let content = lines.slice(1).join("\n")
    let chars = content.split("")

    chars.forEach((val, index) => {
        setTimeout(() => {
            if (val === "\n") {
                boxLetter.innerHTML += "<br>";
            } else {
                boxLetter.innerHTML += val;
            }
            
        }, durationWrite * index)
    })
}


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }

})

