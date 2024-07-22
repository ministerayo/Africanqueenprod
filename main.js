const voterItemHeaders = document.querySelectorAll(".voter-screen-header")
voterItemHeaders.forEach(voterItemHeader => {
    voterItemHeader.addEventListener("click", event => {
        const currentlyActiveVoterItemHeader = document.querySelector(".voter-screen-header.active");
        if (currentlyActiveVoterItemHeader&&currentlyActiveVoterItemHeader!==voterItemHeader){currentlyActiveVoterItemHeader.classList.toggle("active");
            currentlyActiveVoterItemHeader.nextElementSibling.style.maxHeight=0;
        }
        voterItemHeader.classList.toggle("active");
        const voterItemBody = voterItemHeader.nextElementSibling;
    if (voterItemHeader.classList.contains("active")){
        voterItemBody.style.maxHeight = voterItemBody.scrollHeight + "px";
    }
    else{
        voterItemBody.style.maxHeight=0;
    }
    });
});
const Modal = document.querySelector('.payment-successful')
const openModal = document.querySelector('.payment-button-1')
const closeModal = document.querySelector('.dismiss-btn')

openModal.addEventListener('click', () => {
    Modal.showModal();
})
closeModal.addEventListener('click', () => {
    Modal.close();
});




