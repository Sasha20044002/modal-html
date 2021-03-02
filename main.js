let myModal = document.querySelector('#my-modal');
let btn = document.querySelector('.btn');

function openModal() {
    myModal.style.visibility = "visible";
    myModal.style.opacity = "1";
}

function closeModal() {
    myModal.style.visibility = "hidden";
    myModal.style.opacity = "0";
}

btn.addEventListener('click', openModal);

window.addEventListener('click', function (el) {
    if (el.target == myModal){
        closeModal();
    }
})