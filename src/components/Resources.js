import React from 'react'
import {Data} from './Data'


export default function Resources({ search }) {
  return (
    <div className='container'>
    <div className="row">
    {Data.filter((item) => {
      const searchTerm =search.toLowerCase();
      return (
      searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm) ||
      item.docType.toLowerCase().includes(searchTerm)
      );
    }).map((item) => (
    <div className="col-sm-4 my-3 mb-sm-0" key={item.id}>
    <div className="card">
      <div className="card-body">
      
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.text}</p>
        <p class="card-text"><small class="text-body-secondary">{item.docType}</small></p>
        <p> 
        <span class="fa fa-star checked" style={{color: "#FFBE0B"}}></span>
        <span class="fa fa-star checked" style={{color: "#FFBE0B"}}></span>
        <span class="fa fa-star checked" style={{color: "#FFBE0B"}}></span>
        <span class="fa fa-star" style={{color: "silver"}}></span>
        <span class="fa fa-star" style={{color: "silver"}}></span>
        </p>
        <a href="#" className="btn btn-primary" >Preview</a>
        <a href="#" className="btn btn-primary mx-2">Download</a>
      </div>
    </div>
  </div>
    ))}
  </div>
  </div>
  )
}
