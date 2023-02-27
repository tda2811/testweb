const list = document.querySelectorAll('.images img')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const pic = document.querySelector('.galery img')
let currentIndex = 0

list.forEach((image,index)=> {
    image.addEventListener('click',()=> {
        showGalery(index)
    })
})

function showGalery (index){
    currentIndex = index
    pic.src = list[currentIndex].src
    list.forEach((item)=>{
        item.classList.remove('active')
    })
    list[currentIndex].classList.toggle('active')
}

next.addEventListener('click',()=> {
    currentIndex = currentIndex + 1
    if (currentIndex == list.length)
    {
        currentIndex = 0
    }
    showGalery(currentIndex)
})

prev.addEventListener('click',()=> {
    currentIndex = currentIndex - 1
    if (currentIndex < 0)
    {
        currentIndex = list.length - 1
    }
    showGalery(currentIndex)
})

showGalery(currentIndex)