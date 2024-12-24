import { RiGlobeLine } from "react-icons/ri";

function Header() {
  return (
    <header className=" bg-stone-200 text-stone-800 shadow-md">
      <section>
        <p>All Electric &amp; Fisker</p>
      </section>
      <section className="mx-auto flex max-w-7xl justify-between ">
        <img src="public/fisker.svg" alt="fisker" />
        <div>
          <RiGlobeLine className="text-stone-800" />
        </div>
      </section>
    </header>
  );
}

export default Header;
