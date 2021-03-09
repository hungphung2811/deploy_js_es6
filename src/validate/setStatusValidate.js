const setErrorFor = (input, message) => {
    const small = input.nextElementSibling;
    input.classList.remove('border-1.5', 'border-green-500');
    input.classList.add('border-1.5', 'border-red-500');
    small.innerText = message;
}

const setSuccessFor = (input) => {
    const small = input.nextElementSibling;
    input.classList.remove('border-1.5', 'border-red-500');
    input.classList.add('border-1.5', 'border-green-500');
    small.innerText = '';
}

export { setSuccessFor, setErrorFor };
