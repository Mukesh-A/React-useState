import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert,list}) => {


  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      removeAlert()
    },3000)
    return ()=>clearTimeout(timeOut)

    //i am bring this list in props because when ever i click submit green will b blinking before 3 sec if i give another operation like delete it contiue from last sec not from new 3 sec so 

    // when i add list each time the list changes clear time out will b called
  },[list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
