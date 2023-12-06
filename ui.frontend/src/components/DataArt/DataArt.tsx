import React, { useEffect, useState } from "react";

import {
  MapTo,
  MappedComponentProperties,
} from "@adobe/aem-react-editable-components";

import axios from "axios";
require("./DataArt.scss");

type DataArtProps = MappedComponentProperties & {
  limit?: number;
};

export const DataArtEditConfig = {
  emptyLabel: "DataArt",
  isEmpty: (props: DataArtProps) => !props || !props.limit,
};

const DataArt = ({ limit = 5 }: DataArtProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const apiUrl = `https://picsum.photos/v2/list?limit=${limit}`;

      try {
        const response = await axios.get(apiUrl);
        console.log("Response:", response.data);
        if (response?.data) {
          setImages(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    getImages();
  }, [limit]);

  return (
    <div className="dataArt">
      {isLoading && <div className="dataArt__loading">Loading...</div>}
      {images &&
        images.map((image: any) => (
          <div key={image.id} className="dataArt__imageContainer">
            <img
              className="dataArt__image"
              src={image.download_url}
              alt={image.author}
            />
          </div>
        ))}
    </div>
  );
};

MapTo("wknd-spa-react/components/dataart")(DataArt, DataArtEditConfig);
