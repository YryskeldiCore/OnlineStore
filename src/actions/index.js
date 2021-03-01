const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}

const onDeleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        payload: id 
    }
}

const onAddCard = (id) => {
    return {
        type: 'ADD_CARD',
        payload: id 
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    onDeleteCard,
    onAddCard
}