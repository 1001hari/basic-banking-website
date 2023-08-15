document.getElementById('btn-clik').addEventListener('click',function(){
    const emailPart = document.getElementById('email-field');
    const email = emailPart.value;
    

    const passwordPart = document.getElementById('user-password');
    const passWord = passwordPart.value;
  


    // verify

    if(email === 'sontan@gmail.com' && passWord === 'secret'){
        window.location.href = 'account.html';
    }else{
        alert('tui password vule gecish tole ami dhukte dibo na');
    }

    
})