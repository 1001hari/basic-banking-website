document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowAmount = document.getElementById('withdrow-field');

    const withdrowAmountString = withdrowAmount.value;
    const withdrowConvert = parseFloat(withdrowAmountString);
    
    withdrowAmount.value = '';

    if(isNaN(withdrowConvert)){
        alert('please provide a valid number');
        return;
    }

    const withdrowSection = document.getElementById('withdrow-sec');

    const withdromString = withdrowSection.innerText;

    const previusWithdrow = parseFloat(withdromString);

    const balanceTotal = document.getElementById('balace-total');

    const balanceString = balanceTotal.innerText;
    const totalBalace = parseFloat(balanceString);


    

    if(withdrowConvert > totalBalace){
        alert('Baaap er bank a taka nai')
        return;
    }


    const finalWithdrow = previusWithdrow +  withdrowConvert;

    withdrowSection.innerText = finalWithdrow;


    
    const withdrowTotal = totalBalace - withdrowConvert;

    balanceTotal.innerText = withdrowTotal;

   
    
}) 