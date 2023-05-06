import React, { useEffect, useState } from 'react';
import './App.css';
import PostNotice from './components/PostNotice';
import ViewNotice from './components/ViewNotice';
import baseURL from './baseURL.js';

function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [update,setUpdate]=useState(false);

  const formFunc=async(formObj)=>{
    try{
        const res=await fetch(`${baseURL}/notice`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(formObj)
        });
        if(res.ok){
            const data=await res.json();
            alert(data.msg);
            setUpdate(true);
        }
    }catch(err){
        alert(err);
    }
  }

  const deleteFunc=async(id)=>{
    try{
        const res=await fetch(`${baseURL}/notice/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            }
        });
        if(res.ok){
            const data=await res.json();
            alert(data.msg);
            setUpdate(true);
        }
    }catch(err){
        alert(err);
    }
  }

  const getNotices=async()=>{
    setLoading(true);
    try{
      const res=await fetch(`${baseURL}/notice`);
      if(res.ok){
        const out=await res.json();
        setData(out);
        setLoading(false);
        setError(false);
      }
    }catch(err){
      setError(true);
      setLoading(false);
    }
  };

  // useEffect(()=>{
  //     if(Object.keys(formData).length>0){
  //         postData(formData);
  //     }
  // },[formData]);

  useEffect(()=>{
      getNotices();
      setUpdate(false);
  },[update]);

  return (
    <div className="App">
      <PostNotice formFunc={formFunc}/>
      {error?<h1>Error 404!</h1>:loading?<h1>Loading Notices...</h1>:<ViewNotice notices={data} deleteFunc={deleteFunc}/>}
    </div>
  );
}

export default App;
