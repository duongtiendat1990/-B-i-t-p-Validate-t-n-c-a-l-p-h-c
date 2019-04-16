function checkValidateClassName() {
    let patt =/^[CAP][0-9]{4}[GHIKLM][0-9]$/;
    let className = document.getElementById('className').value;
    let result = patt.test(className);
    if (result) document.getElementById('result').innerText = 'The Class name is valid';
    else document.getElementById('result').innerText = 'The Class name is not valid';
}