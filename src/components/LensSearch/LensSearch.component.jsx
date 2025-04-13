import React, { useState } from "react";
import { response } from "../../utils/config";
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

const GoogleLensSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl ?? null;

  const [pagesWithImages, setPagesWithImages] = useState(
    response.responses[0].webDetection.pagesWithMatchingImages || []
  );

  const handleClickImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const [loading, setLoading] = useState(false);

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

      {imageUrl && pagesWithImages.length > 0 && (
        <>
          <SectionTitle>Matching Images</SectionTitle>
          <Grid>
            {pagesWithImages.map((page, index) => (
              <Card key={index} onClick={() => handleClickImage(page.url)}>
                <PageImage
                  src={
                    page?.partialMatchingImages?.[0]?.url ||
                    page?.fullMatchingImages?.[0]?.url ||
                    ""
                  }
                  alt="Page"
                />
                <PageTitle>{page.pageTitle || "Untitled Page"}</PageTitle>
              </Card>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default GoogleLensSearch;
