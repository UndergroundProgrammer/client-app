import React from "react";
const ReadMoreReadLess = ({limit,children}) => {
    const text=children;
    const [isReadMoreShown,setReadMoreShown]=React.useState(false);
    const toggleBtn=()=>{
            setReadMoreShown(prevState=>!prevState);
    }
  return (
    <div className="read-more-read-less" >
    {isReadMoreShown?text:text.substr(0,limit)}
    <a href="#" onClick={toggleBtn}>{isReadMoreShown?"Read less":"...Read More"}</a>
    </div>
    
  );
};

export default ReadMoreReadLess;
