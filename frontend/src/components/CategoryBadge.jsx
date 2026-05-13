function CategoryBadge({ categoria }) {
  return <span className={`badge ${categoria}`}>{categoria}</span>;
}

export default CategoryBadge;