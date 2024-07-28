import React from "react";

type Props = {};

const Footer = (props: Props) => {
   console.log("hello");
   return (
      <div
         style={{
            backgroundColor: "#ccc",
            height: "50px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}>
         Footer
      </div>
   );
};

export default Footer;
