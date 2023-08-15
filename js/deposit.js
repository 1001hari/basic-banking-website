// option -1

document.getElementById('btn-clik').addEventListener('click', function(){
    const inputDepo = document.getElementById('deposite-field');
    const newinputValue = inputDepo.value;
    const inputValue = parseFloat(newinputValue);
    

    const depositeTotalElement = document.getElementById('deposit-tatal');
    const previustotalDeposite = depositeTotalElement.innerText;
    const totalDeposite = parseFloat(previustotalDeposite);

    const totalValue = totalDeposite + inputValue;

    depositeTotalElement.innerText = totalValue;




    const balanceTotal = document.getElementById('balace-total');

    const balanceString = balanceTotal.innerText;
    const totalBalace = parseFloat(balanceString);
    const finalBalance = totalBalace +  inputValue;
    balanceTotal.innerText = finalBalance;




    inputDepo.value = '';

})