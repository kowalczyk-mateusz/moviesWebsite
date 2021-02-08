export const pageAnimation = {
    hidden: {
        y: 300,
        opacity: 0,
        scale: 0,

    },
    show:{
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
        scale: 1,
        
    },
    exit: {
        y: 300,
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    }
}