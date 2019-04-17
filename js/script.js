
// immediate invoked function expression

(function () {


    document.getElementById('message-form').addEventListener('submit', function (e) {
        //prevent default
        e.preventDefault()
        // getting a value
        const message = document.getElementById('message');
        const value = message.value;


        // Check for empty value

        if (value === '') {
            const feedback = document.querySelector('.feedback');
            feedback.classList.add('show');
            setTimeout(function () {
                feedback.classList.remove('show');
            }, 2000)
        } else {
            // change value
            document.querySelector('.message-content').textContent = value;
            // clear value to empty string
            message.value = '';
        }
    })


})(); //to run the function