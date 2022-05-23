import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";


const Tree = ({ xml }) => {
    const [xml2, setXML] = useState(xml);
    useEffect(() => { 
        setXML(xml)
      }, [xml]);

    return(
    <div>
        {xml2 ? (<pre>{JSON.stringify(xml2["xacml3:policy"], null, 2)}</pre>):
        // (xml2.map((xmlElement, index) => (
        //     <li key={index} onClick={event => onClick(xmlElement, event)}>
        //         {xmlElement.name}
        //         {xmlElement.children && (
        //             <Tree xml={xmlElement.children} />
        //         )}
        //     </li>
        // ))):
        (null)}        
    </div>
    )
};
Tree.propTypes = {
    xml: PropTypes.object,
};  
export default Tree;