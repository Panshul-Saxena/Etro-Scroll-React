import React, {useState} from 'react';
import { motion } from "framer-motion";


function Page(props) {

    const[isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
        console.log(isMouseOver);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }


    return (
        <div className="flex-container">
            <motion.div
                whileInView={{transform: "translateX(100%) rotate(-12deg) translateY(-20%)", transition: {duration: 2}}}
                exit={{transform: "translateX(0) rotate(0deg) translateY(0)", transition: { duration: 2 }}}
                viewport={{margin: "-400px"}}
            >
                <img
                    src={props.left}
                    alt=""
                    width="120%"
                    style={{
                        position: "relative",
                        left: "-650px",
                        borderRadius: "30px",
                        opacity: 1,
                    }}
                />
            </motion.div>
            <motion.div className="text-container" initial={{opacity: 0}} whileInView={{opacity:1, }}
                        exit={{transform: "translateX(0) rotate(0deg) translateY(0)", transition: { duration: 2 }}}
            >
                <h3>{props.title}</h3>
                <h1>{props.heading}</h1>

                <button
                    style={{ backgroundColor: isMouseOver ? "white" : "rgb(26, 26, 26)", color: isMouseOver ? "rgb(26, 26, 26)" : "white", borderColor: isMouseOver ? "rgb(26, 26, 26)" : "white"}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >EXPLORE COLLECTION</button>
            </motion.div>
            <motion.div
                whileInView={{transform: "translateX(-110%) rotate(12deg) translateY(-23%)" , transition: {duration: 2}}}
                exit={{transform: "translateX(0) rotate(0deg) translateY(0)", transition: { duration: 2 }}}
                viewport={{margin: "400px"}}
            >
                <img
                    src={props.right}
                    alt=""
                    width="120%"
                    style={{
                        position: "relative",
                        right: "-650px",
                        borderRadius: "30px",
                        opacity: 1,
                    }}
                />
            </motion.div>
        </div>
)
}

export default Page;


// import React from 'react';
// import {

//     motion, useAnimation
// } from 'framer-motion';
// // import {
//     useInView
// } from 'react-intersection-observer';
//
// function Page(props) {

//     const controlsLeft = useAnimation();
//     const controlsRight = useAnimation();
//     const { ref, inView } = useInView({ triggerOnce: true });
//
//     // Animation variants
//     const variantsLeft = {
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: '-100%' },
//     };
//
//     const variantsRight = {
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: '100%' },
//     };
//
//     // Handle animations based on visibility
//     React.useEffect(() => {
//         if (inView) {
//             controlsLeft.start('visible');
//             controlsRight.start('visible');
//         } else {
//             controlsLeft.start('hidden');
//             controlsRight.start('hidden');
//         }
//     }, [controlsLeft, controlsRight, inView]);
//
//     return (
//         <div className="page-content" ref={ref}>
//             <div className="flex-container">
//                 <motion.img
//                     src={props.left}
//                     alt=""
//                     width="35%"
//                     style={{
//                         borderRadius: "30px",
//                     }}
//                     initial="hidden"
//                     animate={controlsLeft}
//                     variants={variantsLeft}
//                     transition={{ duration: 0.5 }}
//                 />
//                 <div className="text-container">
//                     <h3>{props.title}</h3>
//                     <h1>{props.heading}</h1>
//                     <button>Explore Collection</button>
//                 </div>
//                 <motion.img
//                     src={props.right}
//                     alt=""
//                     width="35%"
//                     style={{
//                         borderRadius: "30px",
//                     }}
//                     initial="hidden"
//                     animate={controlsRight}
//                     variants={variantsRight}
//                     transition={{ duration: 0.5 }}
//                 />
//             </div>
//         </div>
//     );
// }
//
// export default Page;
