import React, { useEffect, useState } from "react";

import {
  MapTo,
  MappedComponentProperties,
} from "@adobe/aem-react-editable-components";

import axios from "axios";
require("./AisleRocket.scss");

type AisleRocketProps = MappedComponentProperties & {
  limit?: number;
};

export const AisleRocketEditConfig = {
  emptyLabel: "AisleRocket",
  isEmpty: (props: AisleRocketProps) => !props || !props.limit,
};

const AisleRocket = ({ limit = 5 }: AisleRocketProps) => {
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
    <div className="aisleRocket">
      {isLoading && <div className="aisleRocket__loading">Loading...</div>}
      {images &&
        images.map((image: any) => (
          <div key={image.id} className="aisleRocket__imageContainer">
            <img
              className="aisleRocket__image"
              src={image.download_url}
              alt={image.author}
            />
          </div>
        ))}
    </div>
  );
};

MapTo("wknd-spa-react/components/aislerocket")(
  AisleRocket,
  AisleRocketEditConfig
);
