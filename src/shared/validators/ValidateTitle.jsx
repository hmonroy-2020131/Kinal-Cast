export const validateTitle = (title) =>{
    return title.length >= 5 && title.length <= 30;
}
export const validateTitleMessage = 'El título debe tener entre 3 y 30 caractéres'