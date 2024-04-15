/*....show menu....*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* validate if constant exists*/
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      /*validation if constant exists*/
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }

      /*============Remove Mobile menu===============*/

      const navLink = document.querySelectorAll('.nav-link')

      const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        //when we click on each navlink,we remove the show menu 
        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click',linkAction))


      /*.......Shadow Header ..........Chnage shadow header......*/
      const shadowHeader = () =>{
        const header = document.getElementById('header')
        //when the scroll is greater than 50 viewport height,addd the shadow header class to the header
        this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')
      }
      window.addEventListener('scroll',shadowHeader)

      //.........................EMAILJS.....................................

      const contactForm = document.getElementById('contact-form'),
            contactMessage = document.getElementById('contact-message')

            const sendEmail = (e) =>{
              e.preventDefault()
              //serviceId-template-Form-publicKey
              emailjs.sendForm('sservice_cs7y6lr','template_a3xdvbk','#contact-form','enka2RXr1_exrf5CI')
              .then(() =>{
                //show sent message
                contactMessage.textContent = 'Message sent successfully ✅'

                //Remove message after five seconds
                setTimeout(() => {
                  contactMessage.textContent = ''
                }, 5000);

                //clear input fields
                contactForm.reset()
              }, () =>{
                //show error
                contactMessage.textContent = 'message not sent (service error)❌'
            })

            }
      contactForm.addEventListener('submit',sendEmail)

      //....................SHOW SCROLL UP........................
      const scrollUp = () =>{
       document.getElementById('scroll-up')
      //when the scroll is higher than 350 viewport height,add
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
      }
      window.addEventListener('scroll',scrollUp)

