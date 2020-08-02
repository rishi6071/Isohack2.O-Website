// FAQ DEMO Answers Dynamically

// Slot link's List
const serviceItem = document.getElementsByClassName('service-item');

// Slot Section's List
const faqBox = document.getElementsByClassName('faq-box');

for(let i=0;i<serviceItem.length;i++) 
    serviceItem[i].addEventListener('click', changeFaqSection, i,this);

// Own is Current Object and Specific is Position
function changeFaqSection(specific, own) {

    for(let i=0;i<serviceItem.length;i++) {
        serviceItem[i].style.borderColor = "lightgrey";
        // faqBox[i].style.display = "none";
    }
    this.style.borderColor = "#EB5252";

    const faqOption = document.getElementsByClassName('faqOpt');
    for(let i=0; i<faqOption.length;i++) 
        faqOption[i].addEventListener('click', passText);

    function passText() {
        const faqAnswer = document.getElementsByClassName('faq-answer');
        const text = 'W3Schools maintains a complete JavaScript reference, including all HTML and browser objects. The reference contains examples for all properties, methods and events, and is continuously updated according to the latest web standards. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.';
    
        for(let i=0; i<faqAnswer.length;i++)
            faqAnswer[i].textContent = text;
    }
}
