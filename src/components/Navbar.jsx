import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">AI Garbage Monitoring</h1>
      <Link to="/" className="hover:underline">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
