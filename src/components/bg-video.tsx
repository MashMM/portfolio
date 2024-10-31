
export default function BackgroundVideo() {
  return (
    <>
      <div className='absolute w-full h-full top-0 left-0 dark:bg-black dark:bg-opacity-80'></div>
      <video className="videoTag w-full h-full object-cover" autoPlay loop muted>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}