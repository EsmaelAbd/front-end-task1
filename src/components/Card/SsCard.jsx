import React, { useState } from "react";
import "./SsCard.css";

const SsCard = () => {
  const [openSection, setOpenSection] = useState(null);

  // This function will be invoked when a button corresponding to an accordion section is clicked
  const toggleSection = (section) => {
    // Ternary operator to check if the same button has been clicked twice.
    // If so, close the section by setting 'null', otherwise open the new one.
    setOpenSection(openSection === section ? null : section);
  };

  // Function returning CSS for the current section based on whether it's the open section
  const getPanelStyle = (section) => ({
    maxHeight: openSection === section ? "1000px" : "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  });

  return (
    <div className="sscard">
      <button onClick={() => toggleSection(1)}>Best Useful Links?</button>
      <div style={getPanelStyle(1)}>
        <p>
          Get <strong>the best villa</strong> website template in HTML, CSS, and
          Bootstrap for your business. TemplateMo provides you the
          <a href="#"> best free CSS templates</a> in the world. Please tell
          your friends about us.
        </p>
      </div>
      <button onClick={() => toggleSection(2)}>How does this work?</button>
      <div style={getPanelStyle(2)}>
        <p>
          Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed
          doesn't eiusmod tempor incididunt ut labore consectetur{" "}
          <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <button onClick={() => toggleSection(3)}>
        Why is Villa Agency the best?
      </button>
      <div style={getPanelStyle(3)}>
        <p>
          Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed
          doesn't eiusmod tempor incididunt ut labore consectetur{" "}
          <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default SsCard;
// import React, { useState } from "react";
// import "./SsCard.css";

// const SsCard = () => {
//   // State to keep track of which section is currently open
//   const [openSection, setOpenSection] = useState(null);

//   // Function to handle accordion button clicks
//   const toggleSection = (section) => {
//     // If the section is already open, close it, otherwise open the new one
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <div className="sscard">
//       <button onClick={() => toggleSection(1)}>Best Usefull Links?</button>

//       {openSection === 1 && (
//         <div className={accordion-panel ${openSection === 1 ? 'open' : ''}}>
//           Get <strong>the best villa</strong> website template in HTML CSS and
//           Bootstrap for your business. TemplateMo provides you the
//           <a href="#"> best free CSS templates</a> in the world. Please tell
//           your friends about it.
//           </div>
//       )}
//       <button onClick={() => toggleSection(2)}>How does this work?</button>
//       {openSection === 2 && (
//         <p>
//           Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed
//           doesn't eiusmod tempor incididunt ut labore consectetur
//           <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
//           labore et dolore magna aliqua.
//         </p>
//       )}
//       <button onClick={() => toggleSection(3)}>
//         Why is Villa Agency the best?
//       </button>
//       {openSection === 3 && (
//         <p>
//           Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed
//           doesn't eiusmod tempor incididunt ut labore consectetur
//           <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
//           labore et dolore magna aliqua.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SsCard;

// import React, { useState } from "react";
// import "./SsCard.css";

// const SsCard = () => {
//   const [openIndex, setOpenIndex] = useState(null); // Track the open section index

//   const handleClick = (index) => {
//     // Toggle the clicked section, close it if it's already open
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     // Ensure everything is wrapped inside this main parent div
//     <div className="sscard">
//       <div>
//         <button onClick={() => handleClick(0)}>Best Useful Links?</button>
//         {openIndex === 0 && (
//           <p>
//             Get <strong>the best villa</strong> website template in HTML, CSS,
//             and Bootstrap for your business. TemplateMo provides you the
//             <a href="#"> best free CSS templates</a> in the world. Please tell
//             your friends about it.
//           </p>
//         )}
//       </div>

//       <div>
//         <button onClick={() => handleClick(1)}>How does this work?</button>
//         {openIndex === 1 && (
//           <p>
//             Lorem ipsum dolor <strong>sit amet</strong>, consectetur adipiscing
//             elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//             aliqua.
//           </p>
//         )}
//       </div>

//       <div>
//         <button onClick={() => handleClick(2)}>
//           Why is Villa Agency the best?
//         </button>
//         {openIndex === 2 && (
//           <p>
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//             nisi ut aliquip ex ea commodo consequat.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SsCard;

// import React, { useState } from 'react';
// const SsCard = () => {
//   const [openIndex, setOpenIndex] = useState(null); // Track the open section index

//   const handleClick = index => {
//     // Toggle the clicked section, close it if it's already open
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="sscard">
//       <button onClick={() => handleClick(0)}>Best Useful Links?</button>
//       <div className={content ${openIndex === 0 ? 'open' : ''}}>
//         <p>
//           Get <strong>the best villa</strong> website template in HTML CSS and
//           Bootstrap for your business. TemplateMo provides you the
//           <a href="#">best free CSS templates</a> in the world. Please tell your
//           friends about it.
//         </p>
//       </div>
//       <button onClick={() => handleClick(1)}>How does this work?</button>
//       <div className={content ${openIndex === 1 ? 'open' : ''}}>
//         <p>
//           Dolor <strong>sit amet</strong>, consectetur adipiscing elit, sed
//           do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>
//       <button onClick={() => handleClick(2)}>Why is Villa Agency the best?</button>
//       <div className={content ${openIndex === 2 ? 'open' : ''}}>
//         <p>
//           Dolor <strong>sit amet</strong>, consectetur adipiscing elit, sed
//           do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SsCard;

// // import React from "react";
// // import "./SsCard.css";

// // const ssCard = () => {
// //   return (
// //     <div className="sscard">
// //       <button>Best Usefull Links?</button>
// //       <p>
// //         Get <strong>the best villa</strong> website template in HTML CSS and
// //         Bootstrap for your business. TemplateMo provides you the
// //         <a href="#"> best free CSS templates</a> in the world. Please tell your
// //         friends about it.
// //       </p>
// //       <button>How does this work?</button>
// //       <p>
// //         Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed
// //         doesn't eiusmod tempor incididunt ut labore consectetur
// //         <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore
// //         et dolore magna aliqua.
// //       </p>
// //       <button>Why is Villa Agency the best?</button>
// //       <p>
// //         Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed
// //         doesn't eiusmod tempor incididunt ut labore consectetur
// //         <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore
// //         et dolore magna aliqua.
// //       </p>
// //     </div>
// //   );
// // };

// // export default ssCard;
