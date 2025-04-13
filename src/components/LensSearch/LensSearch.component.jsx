import React, { useEffect, useState } from "react";
import {
  CapturedImage,
  Card,
  Container,
  PageImage,
  PageTitle,
  SectionTitle,
  Grid,
  SearchBar,
  GoogleTextLabel,
  HeaderContainer,
} from "./LensSearch.style";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Loader from "../Loader/Loader.component";

const GoogleLensSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl ?? null;
  const [loading, setLoading] = useState(false);
  const [pagesWithImages, setPagesWithImages] = useState([]);

  const getBase64Data = (dataUrl) => {
    // Remove the data URL prefix
    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, "");
    return base64Data;
  };

  const takePhotoAndDetect = async (base64Image) => {
    try {
      setLoading(true);
      const pureBase64 = getBase64Data(base64Image);
      const visionResponse = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requests: [
              {
                image: {
                  content: pureBase64,
                },
                features: [
                  {
                    type: "WEB_DETECTION",
                  },
                ],
              },
            ],
          }),
        }
      );
      const data = await visionResponse.json();

      const pages =
        data?.responses?.[0]?.webDetection?.visuallySimilarImages || [];
      setPagesWithImages(pages);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleClickImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  useEffect(() => {
    if (imageUrl) {
      takePhotoAndDetect(imageUrl);
    }
  }, [imageUrl]);

  return (
    <Container>
      <HeaderContainer>
        <IoIosArrowBack
          size={24}
          color="#979a9b"
          onClick={() => navigate("/")}
        />
        <GoogleTextLabel>Google</GoogleTextLabel>
      </HeaderContainer>
      <SearchBar>
        <FaSearch size={24} color="#979a9b" />
        <CapturedImage src={imageUrl} alt="Captured" />
      </SearchBar>

      {loading && <Loader />}

      {!loading && imageUrl && pagesWithImages.length > 0 && (
        <>
          <SectionTitle>Matching Images</SectionTitle>
          <Grid>
            {pagesWithImages.map((page, index) => (
              <Card key={index} onClick={() => handleClickImage(page.url)}>
                <PageImage src={page?.url || ""} alt="Page" />
              </Card>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default GoogleLensSearch;
