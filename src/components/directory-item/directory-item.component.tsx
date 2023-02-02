import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TDirectoryItem } from "../directory/directory.component";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: TDirectoryItem;
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { imageUrl, title },
}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(`/shop/${title}`);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
