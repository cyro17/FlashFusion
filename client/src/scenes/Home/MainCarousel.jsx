/* eslint-disable react-refresh/only-export-components */
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// imports all images from assets folder
// const importAll = (r) =>
//   r.keys().reduce((acc, item) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
//   }, {});
//   const heroTextureImports = importAll(
//     require.context("../../assets", false, /\.(jpeg)$/)
//   );

const MainCarousel = () => {
  // console.log(Object.values(images));
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(images).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[300]} sx={{ fontSize: "15px" }}>
              -- NEW ITEMS
            </Typography>
            <Typography variant="h1">Summer Sale</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              Discover More
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;

const images = {
  image1: "https://images.pexels.com/photos/8074593/pexels-photo-8074593.jpeg",
  image2:
    "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHwwfDB8fHww",
  image3:
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHwwfDB8fHww",
  image4:
    "https://img.freepik.com/premium-photo/smiling-student-hipster-girl-with-backpack-going-vacation_149155-4405.jpg",
  image5:
    "https://images.unsplash.com/photo-1515541474431-4d8de9207620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb24lMjBtb2RlbCUyMGJveXxlbnwwfDB8MHx8fDA%3D",
  image6:
    "https://images.unsplash.com/photo-1611622639322-e259f66825b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb24lMjBtb2RlbCUyMGJveXxlbnwwfDB8MHx8fDA%3D",
  image7:
    "https://images.unsplash.com/photo-1527098259893-92fb1e49c990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb24lMjBtb2RlbCUyMGJveXxlbnwwfDB8MHx8fDA%3D",
  image8:
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb24lMjBtb2RlbCUyMGJveXxlbnwwfDB8MHx8fDA%3D",
};
