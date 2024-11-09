document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const feedbackForm = document.querySelector('#feedbackForm');
    if(feedbackForm){
        feedbackForm.addEventListener('submit', function(e){
            e.preventDefault();

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if(!name||!email||!message){
                alert('harus diisi!');
                return;
            }
            alert('Terimakasih telah memberikan feedback!');
            feedbackForm.reset();
        })
    }
})