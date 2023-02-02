import { DirectoryContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";
import { FC } from "react";

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
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
