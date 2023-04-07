import { Divider } from "@mui/material";
import React from "react";

function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <div style={{margin:'28px 0'}}>
      <Divider> <div>myResume. &#169;{copyrightYear}
      {/* <div style={{fontSize:'14px'}}>Contact us<br/> shudanshumain@gmail.com</div> */}
      </div> 
      </Divider>
    </div>
  );
}

export default Footer;
