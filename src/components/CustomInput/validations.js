export function FieldValidation(type = "", value = "") {
    let pattern
    let message = ""
    switch (type) {
        case "email":
            pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i
            message = "Введите корректный email"
            break
        case "letters_only":
            pattern = /^[a-zа-я]+$/i
            message = "Это поле должно содержать только буквы"
            break
        case "numbers_only":
            pattern = /^[0-9]+$/i
            message = "Это поле должно содержать только цифры"
            break
        default:
            return false
    }
    return Boolean(value.match(pattern)) ? true : message
}
