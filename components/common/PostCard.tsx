const PostCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  )
}

export default PostCard;
