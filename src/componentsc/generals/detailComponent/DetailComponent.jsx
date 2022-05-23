import React from 'react'
import { useNavigate } from "react-router-dom";
export const DetailComponent = (props) => {
    const navigate = useNavigate();
    let bg = "#fff";

    const handleReturn = () => {
        navigate( -1 );
    }
  return (
    <div className='mt-5 px-8'>
        {
            props.info !== null ? 
            <>
                <h1 className='text-3xl Metropolis-Extra-Bold color-titulos mb-4'>{ props.info.type }</h1>
            <div className='rounded bg-[#67b5dd] shadow-lg shadow-[#67b5dd] p-5'>
                <ul className=' my-5 rounded-lg border-[#243f59] border-4 w-full overflow-hidden text-white'>
                    {
                        props.info.content.map( (data, index) =>{
                            if ( index %2 === 0){
                                bg = "#ececec";
                            } else {
                                bg = '#fff'
                            }
                            return(
                                <li 
                                    className={`px-6 py-2  w-full  color-titulos bg-[${bg}]`} 
                                    key={index}>
                                        <strong className='Metropolis-Bold'>{data.name} :</strong>
                                        <span className='Metropolis-Light'>{data.value}</span>
                                    </li>
                            )
                        })
                    }
                    <li></li>
                </ul>
                <button 
                    onClick={ handleReturn }
                    className="bg-[#93b33a] rounded px-6 py-2 text-base text-white Metropolis-Bold">Volver</button>
            </div>
            </>
            : <h1>Cargando datos</h1>
        }
    </div>
  )
}
