function init() {
    const sliderItems = document.querySelectorAll('#slider .slider__items-wrap')
    let currentIndex = 0

    function move(nextIndex) {
        const control = document.querySelector('[data-counter]')
        sliderItems[currentIndex].classList.add('hidden')
        sliderItems[currentIndex].removeAttribute('data-active')

        sliderItems[nextIndex].classList.remove('hidden')
        sliderItems[nextIndex].setAttribute('data-active', '')

        // Задаём новый индекс
        control.innerText = nextIndex +1;
        currentIndex = nextIndex
    }

    // Выводим макс.кол-во слайдов
    document.querySelector('[data-max]').innerText = sliderItems.length

    sliderItems.forEach((slide, index) => {
        if (index !== 0) {
            slide.classList.add('hidden')
        } else {
            slide.setAttribute('data-active', '')
        }

        slide.dataset.index = index

        slide.addEventListener('click', () => {
            move(index)
        })
    })

    const btnNext = document.querySelector('#btnNext')
    const btnPrev = document.querySelector('#btnPrev')

    btnNext.onclick = function () {
        const isLimit = currentIndex + 1 === sliderItems.length

        move(isLimit ? 0 : currentIndex + 1)
    }

    btnPrev.onclick = function () {
        const isLimit = currentIndex - 1 === -1

        move(isLimit ? sliderItems.length - 1 : currentIndex - 1)
    }
}

init()