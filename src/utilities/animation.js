

export const opacity = {
    out:{
        opacity:0
    },
    in:{
        opacity:1,
        transition:{
            type:'tween',
            duration:1.5,
            delayChildren: 0.8,
            staggerChildren: 0.3,
        }
    }
}

export const fromleft ={
    out:{
        x:'-100vw',
        scale:0,
    },
    in:{
        x:0,
        scale:1,
        transition:{
            type:'spring',
            delay:.8,
            stiffness:50,
            duration:1.5
        }
    }
}
export const fromright ={
    out:{
        x:'100vw',
        scale:0,
    },
    in:{
        x:0,
        scale:1,
        transition:{
            type:'spring',
            delay:.5,
            stiffness:40,
            duration:1.5
        }
    }
}
export const pop ={
    out:{
        scale:0,
    },
    in:{
        scale:1,
        transition:{
            type:'spring',
            delay:.5,
            stiffness:40,
            duration:1.5
        }
    }
}
export const slide ={
    out:{
        x:-200,
    },
    in:{
        x:0,
        transition:{
            type:'spring',
            delay:.5,
            stiffness:40,
            duration:5
        }
    }
}
