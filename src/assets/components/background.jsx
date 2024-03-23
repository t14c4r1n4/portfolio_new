import background from "../../public/images/index";
 
const bg_image = ()=> {
  return (
    <img
      alt="abstract-triangles"
      src={background}
      variable="bg_image"
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
    
      }}
    />
  )
}

export default bg_image;