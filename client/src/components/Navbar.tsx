import { Heart, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-screen bg-black/20 hover:bg-black/30 px-6 py-4 fixed top-0">
      <div className="flex justify-between items-center">
        <div>Food Fiesta</div>
        <div className="flex gap-10">
          <div>Destinations</div>
          <div>Festivals</div>
          <div>Trips</div>
        </div>
        <div className="flex gap-6">
          <Search /> | <User /> | <Heart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
