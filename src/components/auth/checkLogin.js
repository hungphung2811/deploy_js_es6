import LocalStorage from "../../localStorage/LocalStorage"

export const CheckLogin = () => {
    return LocalStorage.getUser();
}