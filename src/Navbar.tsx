import menu from "./assets/right-menu.svg";

function toggleLinks(): void {
  document.querySelector("nav>ul")?.classList.toggle("hidden");
}

export default function Navbar() {
  return (
    <div>
      <div className="min-h-[6rem]"></div>
      <nav className="flex fixed top-0 w-full text-black justify-between align-middle flex-col md:flex-row min-h-[5.5rem] py-6 px-4 text-2xl bg-blue-600 drop-shadow-lg shadow-neutral-300">
        <div className="flex justify-between align-middle">
          <a href="#" className="hover:text-gray-300">
            This is the Navbar
          </a>

          <a href="#" onClick={toggleLinks}>
            <img
              src={menu}
              alt="menu"
              className="w-10 md:hidden cursor-pointer hover:bg-neutral-700 rounded-lg"
            />
          </a>
        </div>
        <ul className="gap-10 hidden md:flex text-center ">
          <li>
            <a href="#" className="hover:text-gray-300">
              Link1
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Link2
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Link3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
