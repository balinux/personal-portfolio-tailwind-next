export default function Nav(params) {
  return (
    <nav className="flex flex-row justify-between items-center h-16 bg-[#FBFBFB] md:px-28">
      {/* logo */}
      <div>
        <p className="text-4xl text-primary font-bold">R.</p>
      </div>

      {/* menu */}
      <div className="flex flex-row">
        <p className="ml-8 font-semibold">Home</p>
        <p className="ml-8 font-semibold">About</p>
        <p className="ml-8 font-semibold">Hobby</p>
        <p className="ml-8 font-semibold">Blog</p>
      </div>
    </nav>
  );
}
