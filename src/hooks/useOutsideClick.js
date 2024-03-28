import React, { useEffect } from 'react'

const useOutsideClick = (ref, callBack, exeptionId) => {
    useEffect(() => { 
        const handleOutsideClick = (e) => {
            console.log(exeptionId)
            if (ref.current && !ref.current.contains(e.target) && e.target.id !== exeptionId) {
                callBack()
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [ref, callBack])


}

export default useOutsideClick