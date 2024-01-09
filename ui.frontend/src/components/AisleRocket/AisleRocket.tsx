/*import React, { useEffect, useState } from "react";

import {
  MapTo,
  MappedComponentProperties,
} from "@adobe/aem-react-editable-components";

require("./AisleRocket.scss");

type AisleRocketProps = MappedComponentProperties & {
  limit?: number;
};

type ApiImage = {
  id: string;
  download_url: string;
  author: string;
};

export const AisleRocketEditConfig = {
  emptyLabel: "AisleRocket",
  isEmpty: (props: AisleRocketProps) => !props || !props.limit,
};

const config = {
  loadingLabel: "Loading AisleRocket...",
  errorMessage: "Failed to load AisleRocket.",
};

const AisleRocket = ({ limit = 5 }: AisleRocketProps) => {
  const [infoMessage, setInfoMessage] = useState(config.loadingLabel);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const apiUrl = `https://picsum.photos/v2/list?limit=${limit}`;

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          console.log("Response:", data);
          setImages(data);
        }
        setIsLoading(false);
      } catch (error) {
        setInfoMessage(config.errorMessage);
      }
    };

    getImages();
  }, [limit]);

  return (
    <div className="aisleRocket" data-testid="AisleRocket">
      {isLoading ? (
        <div className="aisleRocket__loading">{infoMessage}</div>
      ) : (
        images.map((image: ApiImage) => (
          <div key={image.id} className="aisleRocket__imageContainer">
            <img
              className="aisleRocket__image"
              src={image.download_url}
              alt={image.author}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default MapTo("wknd-spa-react/components/aislerocket")(
  AisleRocket,
  AisleRocketEditConfig
);*/
