import { Triangle } from 'react-loader-spinner';
import React,{FC} from 'react'
export default function ScreenLoader<FC>(){
    return(
        
            <Triangle
                        height="100"
                        width="100"
                        color="#e76f51"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        visible={true}

                    />

        )

}