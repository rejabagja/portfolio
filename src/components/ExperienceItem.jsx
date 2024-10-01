const ExperienceItem = ({title, year, children}) => {
  return (
    <div className="mb-2">
      <h3 className="font-medium">{title}, {year}</h3>
      <p className="mb-2">{children}</p>
      <hr />
    </div>
  )
}

export default ExperienceItem;