import Marquee from "react-fast-marquee";

export default function ScrollBanner() {
  return (
    <div className="relative overflow-hidden w-">
      <Marquee
        className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-2 font-base m-0"
        direction="left"
      >
        {Array(10)
          .fill('xd')
          .map((x, id) => {
            return (
              <div className="flex items-center" key={id}>
                <span className="mx-4 text-xl font-heading lg:text-4-l">
                  Transform ideas into code!
                </span>
              </div>
            )
          })}
      </Marquee>
    </div>
  )
}