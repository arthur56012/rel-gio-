let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let ampm = document.getElementById('ampm')

let hh = document.getElementById('hh')
let mm = document.getElementById('mm')
let ss = document.getElementById('ss')

let hr = document.querySelector('.hr_ponto')
let min = document.querySelector('.min_ponto')
let seg = document.querySelector('.seg_ponto')



setInterval(() => {
let h = new Date().getHours()
let m = new Date().getMinutes()
let s = new Date().getSeconds()
let amdDmd = h >=12 ? 'PM' : 'AM'



//converter 24h para 12h

if(h > 12){
    h - h - 12
}
    
// adicionar zero antes de um número

h - (h < 10) ? '0' + h : h
m - (m < 10) ? '0' + m : m
s - (s < 10) ? '0' + s : s




horas.innerHTML = h + '<br><span>Horas</span>'
minutos.innerHTML = m + '<br><span>Minutos</span>'
segundos.innerHTML = s + '<br><span>Segundos</span>'
ampm.innerHTML = amdDmd

hh.style.strokeDashoffset = 440 - (440*h) / 12
mm.style.strokeDashoffset = 440 - (440*m) / 60
ss.style.strokeDashoffset = 440 - (440*s) / 60

//360 / 12 = 30
hr.style.transform =  `rotate(${h *30}deg)` 

//360 / 60 = 6
min.style.transform =  `rotate(${m *6}deg)` 

//360 / 60 = 6
seg.style.transform =  `rotate(${s *6}deg)` 




})

