const btn = document.getElementById('check-btn');
const inp = document.getElementById('text-input');
const result = document.getElementById('result');
function check(){
    const geti = inp.value;
    const arr = geti.split('').reverse().join('');
    let str = '';
    let arr2 = '';
    for(let i = 0; i < geti.length; i++){
        const char = geti[i];
        if(/[a-zA-Z0-9]/.test(char)){
            str += char.toLowerCase();
        }
    }
    for(let i = 0; i < arr.length; i++){
        const char = arr[i];
        if(/[a-zA-Z0-9]/.test(char)){
            arr2 += char.toLowerCase();
        }
    }
    if(geti === ''){
        alert('Please input a value');
    }
    else if(arr2 === str){
        result.textContent = geti + ' is a Palindrome';
        result.classList.remove('hidden');
    } else {
        result.textContent = geti + ' is not a Palindrome';
        result.classList.remove('hidden');
    }
    console.log(arr2)
    console.log(str)
}
