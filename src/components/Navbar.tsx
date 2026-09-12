const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 border-gray-100 border-b bg-white">
      <div>Dev Stack</div>
      <div>
        <a href="">Home</a>
        <a href="">Technologies</a>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div>
        <button>Sing In</button>
        <button>Sing Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
