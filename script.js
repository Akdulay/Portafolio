let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['  Python','   Javascript','    Back-End developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});





function sendMensaje() {
    // Obtener los elementos por su atributo name
    const nameCompleto = document.querySelector('input[name="Name"]').value;
    const emailAdress = document.querySelector('input[name="Email Address"]').value;
    const contraseña = document.querySelector('input[name="Mobile Number"]').value;
    const asunto = document.querySelector('input[name="Email Subject"]').value;
    const mensaje = document.querySelector('textarea[name="Your Message"]').value;
    const correo='akdulayr@gmail.com'

    Email.send({
        Host : "smtp.gmail.com",
        Username : nameCompleto,
        Password : contraseña,
        To : correo,
        From : emailAdress,
        Subject : asunto,
        Body : mensaje
    }).then(
        message =>{
            alert(message);
        document.forms['submit-to-google-sheet'].reset();
        }
    );

}