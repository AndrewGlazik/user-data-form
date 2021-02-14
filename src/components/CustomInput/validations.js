export function FieldValidation(type = "", value = "") {
    let pattern
    switch (type) {
        case "email":
            pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i
            return "Введите корректный email"
        case "letters_only":
            pattern = /^[a-zа-я]+$/i
            return "Это поле должно содержать только буквы"
        case "numbers_only":
            pattern = /^[0-9]+$/i
            break
        default:
            return false
    }
    return Boolean(value.match(pattern))
}
