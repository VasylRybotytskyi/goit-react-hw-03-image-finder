import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
export const ImageGallery = ({ items }) => {
  return (
    <>
      <GalleryList>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </GalleryList>
    </>
  );
};
