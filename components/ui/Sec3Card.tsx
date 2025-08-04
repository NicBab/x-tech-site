"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { Sec3CardInfo } from "@/constants/index";

export default function Sec3Card() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        width: "100%",
        mx: 2,
        my: 2,
        px: 2,
      }}
    >
      {Sec3CardInfo.map((info) => (
        <Card
          key={info.id}
          className="cards"
          sx={{
            width: "100%",
            maxWidth: 900,
            minHeight: 180,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            borderRadius: 2,
            overflow: "hidden",
          }}
          elevation={4}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              p: 2,
            }}
          >
            {/* <Box
              sx={{
                width: 60,
                height: 60,
                minWidth: 60,
                minHeight: 60,
                borderRadius: "50%",
                backgroundColor: "#fb923c", // similar to 'bg-dimBlue'
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 3,
              }}
            >
              <CardMedia
                component="img"
                src={info.icon}
                alt="icon"
                sx={{
                  width: "50%",
                  height: "50%",
                  objectFit: "contain",
                }}
              />
            </Box> */}

            <CardContent sx={{ flex: 1, pl: 0 }}>
              <Typography className="orange-text-gradient"
                variant="h5"
                component="div"
                sx={{ fontWeight: 600, mb: 1 }}
              >
                {info.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                {info.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}



// "use client";

// import React from "react";
// import { features } from "@/constants/index";
// import styles, { layout } from "../style";

// export default function Sec3Card() {
//   return (
//     <section id="features" className={layout.section}>
//       <div className={`${layout.sectionImg} flex-col mx-10`}>
//         {features.map((feature, index) => (
//           <div
//             key={feature.id}
//             className={`flex flex-row p-6 ${
//               index !== features.length - 1 ? "mb-6" : "mb-0"
//             } feature-card border border-black-500`}
//           >
//             <div
//               className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
//             >
//               <img
//                 src={feature.icon}
//                 alt="icon"
//                 className="w-[50%] h-[50%] object-contain"
//               />
//             </div>
//             <div className="flex-1 flex flex-col ml-3">
//               <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
//                 {feature.title}
//               </h4>
//               <p className="font-poppins font-normal text-black text-[16px] leading-[23px] mb-1">
//                 {feature.content}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





// // import * as React from "react";
// // import {
// //   Card,
// //   CardContent,
// //   CardMedia,
// //   Typography,
// //   CardActionArea,
// //   Box,
// // } from "@mui/material";
// // import { Sec3CardInfo } from "@/constants/index";

// // export default function Sec3Card() {
// //   return (
// //     <Box
// //       sx={{
// //         display: "flex",
// //         flexWrap: "wrap",
// //         justifyContent: "center",
// //         alignItems: "stretch",
// //         gap: 4,
// //         width: "100%",
// //         mt: 6,
// //         px: 2,
// //       }}
// //     >
// //       {Sec3CardInfo.map((info) => (
// //         <Card
// //           key={info.id}
// //           sx={{
// //             maxWidth: 300,
// //             width: "100%",
// //             height: 420,
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "flex-start",
// //             overflow: "hidden",
// //             p: 0, // remove any card-level padding
// //           }}
// //           elevation={4}
// //         >
// //           <CardActionArea
// //             sx={{
// //               height: "100%",
// //               display: "flex",
// //               flexDirection: "column",
// //               alignItems: "stretch",
// //               p: 0,
// //               m: 0,
// //             }}
// //           >
// //             <CardMedia
// //               component="img"
// //               image={info.src}
// //               alt={info.alt}
// //               height="220"
// //               sx={{
// //                 display: "block",
// //                 m: 0,
// //                 p: 0,
// //                 borderRadius: 0,
// //               }}
// //             />

// //             <CardContent
// //               sx={{
// //                 flexGrow: 1,
// //                 px: 2,
// //                 pt: 2,
// //               }}
// //             >
// //               <Typography
// //                 variant="h4"
// //                 component="div"
// //                 align="center"
// //                 sx={{ mb: 1 }}
// //               >
// //                 {info.title}
// //               </Typography>
// //               <Typography
// //                 variant="body1"
// //                 sx={{
// //                   color: "text.secondary",
// //                   textAlign: "center",
// //                 }}
// //               >
// //                 {info.desc}
// //               </Typography>
// //             </CardContent>
// //           </CardActionArea>
// //         </Card>
// //       ))}
// //     </Box>
// //   );
// // }
