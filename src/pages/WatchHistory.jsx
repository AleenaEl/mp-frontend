import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getAVideosFrmHistoryAPI } from '../../services/allAPI'
import {deleteHistoryAPI} from '../../services/allAPI'
// import React from 'react'

function WatchHistory() {
  const [history, setHistory] = useState([])
  
  useEffect(() => {
    getHistory()
   
  }, [])
  
  const getHistory = async () => {
    const result = await getAVideosFrmHistoryAPI()
    if (result.status === 200) {
      setHistory(result.data)
      
    }
    else {
      console.log('Api failed in History');
      console.log(result.message);
    }
     console.log("hod", history);
  }
  const removeVideoHistory = async (id) => {
    await deleteHistoryAPI(id)
    getHistory()
    
    }


  
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link
          style={{
            textDecoration: "none",
            color: "blueviolet",
            fontSize: "25",
          }}
        >
          Back to Home<i className="fa-solid fa-arrow-rotate-left fa-fade"></i>
        </Link>
      </div>
      <table className="table mb-5 container shadow w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history?.length > 0 ? (
            history?.map((hisVideo, index) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td>{index + 1}</td>
                <td>{hisVideo?.caption}</td>
                <td>
                  <a href={hisVideo?.link} target="_blank">
                    {hisVideo?.link}
                  </a>
                </td>
                <td>{hisVideo?.timestamp}</td>
                <td>
                  <button className="btn" onClick={()=>removeVideoHistory(hisVideo?.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p className="text-danger fw-bolder">Nothing to Display</p>
          )}
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory