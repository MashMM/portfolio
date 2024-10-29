import { ThemeSwitcher } from "./theme-switcher";

export default function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-5">
      <div className="z-50 mx-auto mt-5 flex h-[70px] w-full max-w-[860px] items-center justify-between rounded-base border-2 border-border bg-white px-5 text-text dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText">
        <a href="/">
          <h2 className="text-3xl font-heading">Mashhood Manzoor</h2>
        </a>
        <div className="flex items-center text-lg">
          <a className="mr-10 w400:mr-7" href="">Experience</a>
          <a className="mr-10 w400:mr-7" href="/">Projects</a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
