import React from 'react'

const Definitions = ({word, category, meanings}) => {
  console.log(meanings)
  return (
    <>
     <div className='meanings'>
         {word === '' ? <span className='subTitle'>Start by typing a word in Search</span>:(
             meanings.map(({meanings})=> meanings.map(({definitions})=>definitions.map((meaning)=>{
                 return (
                   <>
                    <div>{meaning.definition}</div>
                     <hr />
                     {meaning.example && <span><b>example :</b> {meaning.example} </span>}
                   </>
                 )
             })))
         )}
     </div>
    </>
  )
}

export default Definitions
