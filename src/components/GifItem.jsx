export const GifItem = ({title, image, id}) => {

  return (
    <div className="coder-card">
        <img src={image} width={"300px"}  height={"300px"} alt={title} />
        <h4>{title}</h4>
    </div>
  )
}
