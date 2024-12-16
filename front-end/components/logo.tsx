import Image from "next/image";
import React from "react";
import img from "../public/images/PlanArtsLogo.png";

function Logo() {
    return <img src="/img/PlanArtsLogo.png" alt="PlanArts Logo" width={16} height={16} />
}

// const Logo = () => {
//     return  <div>
//         <Image
//                         src="/front-end/public/images/PlanArtsLogo.png"
//                         alt="PlanArts Logo"
//                         width={16}
//                         height={16}
//                     />
//     </div>
// }
export default Logo;