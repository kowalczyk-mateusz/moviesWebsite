import {useEffect} from 'react'


const MobileHook = (setMobile, pixels)=>{
    return(
        useEffect(()=>{
            if(window.innerWidth < pixels) setMobile(true);
            function handleResize( ){
                if(window.innerWidth < pixels) setMobile(true);
                else setMobile(false);
            }
            window.addEventListener('resize', handleResize)
        })
    )
}

export default MobileHook