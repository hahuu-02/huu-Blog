const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sideBars = $$('.app__sidebar-item')
const appContens = $$('.app__container')
const prevBtn = $('.prev--btn')
const nextBtn = $('.next--btn')
const slideUser = $$('.slide__user')
const sayingBtns = $$('.saying--btn')

// console.log(sayingBtns)


const app = {
    currentIndex: 0,
    
    handlEvent: function() {
        // Mở UI SIDEBAR
        sideBars.forEach((sideBar, index) => {
            const appConten = appContens[index];
            
            sideBar.onclick = function() {
                $('.app__sidebar-item.active').classList.remove('active')
                $('.app__container.active').classList.remove('active')

                sideBar.classList.add('active')
                appConten.classList.add('active')
            }
        })

        
        
    },
    

    nextSlide: function() {
        slideUser.forEach((slide, index) => {
            const sayingBtn = sayingBtns[index]
            nextBtn.onclick = function() {
                $('.saying--btn.active').classList.remove('active')
                $('.slide__user.active').classList.remove('active')
                
                if(app.currentIndex >= index) {
                    app.currentIndex = -1
                } 
                sayingBtns[app.currentIndex += 1].classList.add('active')
                app.currentIndex -= 1
                slideUser[app.currentIndex += 1].classList.add('active')              
            }
        })
        
    },

    
    // var x = setInterval(console.log('huu'), 5000)

    prevSlide: function() {
        slideUser.forEach((slide, index) => {
            const appConten = appContens[index];
            prevBtn.onclick = function() {
                $('.saying--btn.active').classList.remove('active')
                $('.slide__user.active').classList.remove('active')
                
                if(app.currentIndex <= 0) {
                    app.currentIndex = index + 1
                } 
                sayingBtns[app.currentIndex -= 1].classList.add('active')
                app.currentIndex += 1

                slideUser[app.currentIndex -= 1].classList.add('active')                
            }
        })
    },

    chooseSlide: function() {
        sayingBtns.forEach((sayingBtn, index) => {
            const slideUse = slideUser[index];
            sayingBtn.onclick = function() {
                $('.slide__user.active').classList.remove('active')
                $('.saying--btn.active').classList.remove('active')

                sayingBtn.classList.add('active')
                slideUse.classList.add('active')                
                clearInterval(this.myVar)
            }
        })
    },

    showSlide: function() {
        $('.saying--btn.active').classList.remove('active')
        $('.slide__user.active').classList.remove('active')
    
        if(app.currentIndex >= slideUser.length - 1) {
            app.currentIndex = -1
        } 
        // console.log(slideUser.length) 

        sayingBtns[app.currentIndex += 1].classList.add('active')
        app.currentIndex -= 1
        slideUser[app.currentIndex += 1].classList.add('active')                           
         myVar = setInterval(this.showSlide, 7000)
    },

   
    
    

    start: function() {
        this.handlEvent();
        this.showSlide();
        this.nextSlide(); 
        this.prevSlide(); 
        this.chooseSlide();   
        
    }
}

app.start();

