export const GradientText = ({ text }) => {
  return (
    <span className="mb-4 text-white font-bold
    bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text">
      {decodeURI(text)}
    </span>
  )
}