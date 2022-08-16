    import React from 'react'
    import error from '../assets/404.png'

    function Error() {
    return (
        <div>
            <div className="px-20 justify-center">
        <img src={error} alt="404 page not found"  className="max-w-full  border-none rounded align-middle"/>
        </div>
        </div>  
    )
    }

    export default Error