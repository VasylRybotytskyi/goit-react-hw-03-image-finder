import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

function ImageGallery({ items }) {
  return (
    <>
      <GalleryList>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </GalleryList>
    </>
  );
}

export default ImageGallery;
