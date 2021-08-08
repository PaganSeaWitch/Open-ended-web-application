import React, { useEffect, useState, useRef } from 'react'
import TitlePage from './title-page.component';
import About from './about.component'
import Saving from './about-saving.component';
import Beginning from './beginning.component';
const GenerationalWealth = () => {
 
  const [page, setPage] = useState('beginning');
  const changePage=(page)=>{
    setPage(page);
  }

  const showPage=()=>{
    switch(page){
      case('main'):
      return <TitlePage changePage={changePage}/>
      case('about'):
        return <About changePage={changePage}/>
      case('saving'):
        return <Saving changePage={changePage}/>
      case('beginning'):
        return <Beginning changePage={changePage}/>
      default:
        return<div>There appears to have been an error getting page {page}</div>
    }
  }
  return (
    <div className={"background"}>
      {showPage()}

    </div>
  )
}
export default GenerationalWealth;