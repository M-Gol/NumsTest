const nums = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]

let box1 = document.getElementById('box')
let box2 = document.getElementById('box1')
let box3 = document.getElementById('box2')
let box4 = document.getElementById('box3')
let box5 = document.getElementById('box4')
let box6 = document.getElementById('box5')
let box7 = document.getElementById('box6')
let box8 = document.getElementById('box7')
let box9 = document.getElementById('box8')
let box10 = document.getElementById('box9')
let box11 = document.getElementById('box10')
let box12 = document.getElementById('box11')
let ansBox = document.getElementById('ans')
let ress = []
let ress1 = []
let time = 20

document.getElementById('timer').textContent = time


function Cross(SetU, SetR) {
    const cross = []
    for (let i of SetU) {
        if (SetR.includes(Number(i)) & !(cross.includes(i))) {
            cross.push(i)
        }
    }
    return cross
}
function GavgMel() {
    time--
    document.getElementById('timer').textContent = time
}
document.getElementById('btn').onclick = function() {

    document.getElementById('after2').innerHTML = ''

    ress = []

    let res = nums[Math.floor(Math.random()*90)]
    let out = ''
    out += `<p class="alert" role="alert">${res}</p>`
    box1.innerHTML = out
    ress.push(res) 
    
    let res1 = nums[Math.floor(Math.random()*90)]
    let out1 = ''
    out1 += `<p class="alert" role="alert">${res1}</p>`
    box2.innerHTML = out1 
    ress.push(res1)
    
    let res2 = nums[Math.floor(Math.random()*90)]
    let out2 = ''
    out2 += `<p class="alert" role="alert">${res2}</p>`
    box3.innerHTML = out2
    ress.push(res2) 
    
    let res3 = nums[Math.floor(Math.random()*90)]
    let out3 = ''
    out3 += `<p class="alert" role="alert">${res3}</p>`
    box4.innerHTML = out3
    ress.push(res3) 
    
    let res4 = nums[Math.floor(Math.random()*90)]
    let out4 = ''
    out4 += `<p class="alert" role="alert">${res4}</p>`
    box5.innerHTML = out4 
    ress.push(res4)
    
    let res5 = nums[Math.floor(Math.random()*90)]
    let out5 = ''
    out5 += `<p class="alert" role="alert">${res5}</p>`
    box6.innerHTML = out5
    ress.push(res5) 
    
    let res6 = nums[Math.floor(Math.random()*90)]
    let out6 = ''
    out6 += `<p class="alert" role="alert">${res6}</p>`
    box7.innerHTML = out6
    ress.push(res6) 
    
    let res7 = nums[Math.floor(Math.random()*90)]
    let out7 = ''
    out7 += `<p class="alert" role="alert">${res7}</p>`
    box8.innerHTML = out7 
    ress.push(res7)
    
    let res8 = nums[Math.floor(Math.random()*90)]
    let out8 = ''
    out8 += `<p class="alert" role="alert">${res8}</p>`
    box9.innerHTML = out8 
    ress.push(res8)
    
    let res9 = nums[Math.floor(Math.random()*90)]
    let out9 = ''
    out9 += `<p class="alert" role="alert">${res9}</p>`
    box10.innerHTML = out9
    ress.push(res9) 
    
    let res10 = nums[Math.floor(Math.random()*90)]
    let out10 = ''
    out10 += `<p class="alert" role="alert">${res10}</p>`
    box11.innerHTML = out10 
    ress.push(res10)
    
    let res11 = nums[Math.floor(Math.random()*90)]
    let out11 = ''
    out11 += `<p class="alert" role="alert">${res11}</p>`
    box12.innerHTML = out11 
    ress.push(res11)

    const Intt = setInterval(GavgMel, 1000)
    
    setTimeout(function() {
        clearInterval(Intt)
        box1.textContent=''
        box2.textContent=''
        box3.textContent=''
        box4.textContent=''
        box5.textContent=''
        box6.textContent=''
        box7.textContent=''
        box8.textContent=''
        box9.textContent=''
        box10.textContent=''
        box11.textContent=''
        box12.textContent=''
    }, 20000)
}
document.getElementById('btn2').onclick = function() {
    ress1 = []
    let inp = document.getElementsByClassName('input')
    for (let i = 0; i<inp.length; i++) {
        if (inp[i].value === '') continue;
        else {
            ress1[i] = inp[i].value
        }
    }
    document.getElementById('timer').textContent = 'Ответы ниже'
    let ans = ''
    ans += `<h2>Все числа из предыдущей таблицы ${ress}</h2>
    <h2>Верно угаданы числа ${Cross(ress1,ress)}, что составляет примерно ${Math.floor((Cross(ress1,ress).length*100)/12)}% от всех чисел</h2>`
    ansBox.innerHTML = ans
}