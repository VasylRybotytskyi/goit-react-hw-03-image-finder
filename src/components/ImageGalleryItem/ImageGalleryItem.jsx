export const ImageGalleryItem = props => {
  return (
    <>
      {props.items &&
        props.items.hits &&
        props.items.hits.map(el => (
          <li key={el.id}>
            <img src={el.previewURL} alt={el.user} />
          </li>
        ))}
    </>
  );
};
