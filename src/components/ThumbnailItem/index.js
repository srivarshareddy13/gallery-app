// Write your code here.
const ThumbnailItem = props => {
  const {eachDetails, isActive, setActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachDetails

  const onClick = () => {
    setActiveId(id)
  }

  return (
    <div>
      <li>
        <button type="button" onClick={onClick}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}
export default ThumbnailItem
