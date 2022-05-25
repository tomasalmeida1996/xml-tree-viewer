import React, { useEffect, useState } from 'react';
import Tree from './Tree';
import axios from 'axios';
import XMLData from './data/xmldata.xml';

function App() {
  const [xml, setXML] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);  
  const [error, setError] = useState('');  

  const xmlFileUpload = (fileLocation) => {
    // Request made to the backend api     
    axios.get(fileLocation, {
      "Content-Type": "application/xml; charset=utf-8"
    }).then((response) => {
      var parseString = require('xml2js').parseString;
      parseString(response.data, function (err, result) {
        setXML(result);
      });
    });    
  }

  // On file select (from the pop up) 
  const onFileChange = event => {     
    const file = event.target.files[0] //? case user cancels
    console.log("file type",event.target.files[0]?.type)
    
    if(!file){//user cancels
      // Update the state 
      setError("Select file!");
      setSelectedFile(null);
      setXML(null);
    }
    else if(file && file.type !== "text/xml"){
      // error message
      setError("Incorrect file type!");
    }
    else{
      // Update the state 
      setSelectedFile(file);       
      setError("");
    }
    
  }; 

  // On file upload (upload button click) 
  const onFileUpload = () => { 
    const fileLocation = XMLData;    
    xmlFileUpload(fileLocation)    
  }; 

  return (
    <div className="App">
      <h3> Upload XML File! </h3> 
      <h5> {error} </h5> 
      <input type="file" 
      onChange={onFileChange} 
      /> 
      <button disabled={error || !selectedFile} onClick={onFileUpload} > 
        Upload file! 
      </button> 
      <Tree
        xml={xml}        
      />
    </div>
  );
}
export default App;
