import { setErrorFor, setSuccessFor } from "./setStatusValidate";

const isEmail = (email) => {
    const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value.trim());
    if (!result) {
        setErrorFor(email, 'bạn cần nhập đúng email');
        return false;
    } else {
        setSuccessFor(email);
        return true;
    }
}
const isRequired = (...inputs) => {
    inputs.forEach(input => {
        if (!input.value.trim()) {
            setErrorFor(input, 'Bạn cần nhập trường này !');
        }
        else {
            setSuccessFor(input);
        }
    })
}

const isNumber = (input) => {
    if (input.value.trim() <= 0) {
        setErrorFor(input, 'Bạn cần nhập số > 0 !');
        return false;
    }
    else {
        setSuccessFor(input);
        return true;
    }
}

const isPhoneNumber = (phoneNumber) => {
    const result = /((09|03|07|08|05)+([0-9]{8})\b)/g.test(phoneNumber.value.trim());
    if (!result) {
        setErrorFor(phoneNumber, 'bạn cần nhập đúng số điện thoại (có 10 số và bắt đầu bằng số 09 || 03 ||07');
        return false;
    } else {
        setSuccessFor(phoneNumber);
        return true;
    }
}

export { isEmail, isRequired, isNumber, isPhoneNumber };


