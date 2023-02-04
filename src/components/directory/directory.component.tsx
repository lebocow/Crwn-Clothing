import { DirectoryContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";
import { FC, useCallback } from "react";

export type TDirectoryItem = {
  id: number;
  imageUrl: string;
  title: string;
};

type DirectoryProps = {
  categories: TDirectoryItem[];
};

const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(
        useCallback(
          (category) => <DirectoryItem key={category.id} category={category} />,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [categories]
        )
      )}
    </DirectoryContainer>
  );
};

export default Directory;
