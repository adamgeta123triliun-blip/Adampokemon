export default function Navbar() {
  return (
    <>
      <nav className="bg-neutral-50 flexvpy-5 items-center justify-between px-3 text-neutral-900 border-b-2 border-black shadow-lg">
        <div className="font-bold text-xl">adamkurniawan</div>
        <div>
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
          <a href="/" className="hover:text-yellow-400">
            About
          </a>
          <a href="/" className="hover:text-yellow-400">
            Contact
          </a>
        </div>
        <button>Telusuri</button>
      </nav>
    </>
  );
}
