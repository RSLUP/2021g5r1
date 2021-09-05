const accordion = document.getElementsByClassName('contentBx');
const contentBx = document.getElementById('contentBx');
const icon = document.getElementById('icon');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}