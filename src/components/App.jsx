import React, {useRef} from "react";

import { motion } from "framer-motion";
import './App.css';
import Page from './Page';
import info from '../resources/info';


function App() {

    return (
        <div className="app-container">
            <motion.div
                className="page-container"
                style={{
                    scrollSnapType: "y mandatory",
                    overflowY: "scroll",
                    WebkitOverflowScrolling: "touch",
                    height: "100vh",
                }}
            >
                {info.map((page, index) => (
                    <motion.div
                        className="page"
                        style={{
                            scrollSnapAlign: "start",
                            height: "100vh", // Adjust height as needed
                        }}
                        initial={{opacity:0,}}
                        whileInView={{opacity:1,}}
                        viewport={{margin:"-400px"}}
                    >
                        <Page
                            key={page.id}
                            left={page.left}
                            heading={page.heading}
                            title={page.title}
                            right={page.right}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default App;






// import React from "react";
// import { motion } from "framer-motion";
// import './App.css';
// import Page from './Page';
// import info from '../resources/info';
//
// function App() {
//     return (
//         <div className="app-container">
//             <motion.div
//                 className="page-container"
//                 style={{
//                     scrollSnapType: "y mandatory",
//                     overflowY: "scroll",
//                     WebkitOverflowScrolling: "touch",
//                     width: "100%",
//                     height: "100vh",
//                 }}
//             >
//                 {info.map((page, index) => (
//                     <motion.div
//                         key={index}
//                         className="page"
//                         style={{
//                             scrollSnapAlign: "start",
//                             height: "100vh", // Adjust height as needed
//                         }}
//                     >
//                         <Page
//                             left={page.left}
//                             heading={page.heading}
//                             title={page.title}
//                             right={page.right}
//                         />
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }
//
// export default App;
