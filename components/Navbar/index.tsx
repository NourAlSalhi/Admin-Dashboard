import Logo from "../Logo";
import Image from "../Image";
const Navbar = () => {
  return (
    <div className="flex justify-between py-2 px-5 bg-gray-900">
      <Logo />
      <div className="bg-white rounded-full">
        <Image src="/images/profile.png" alt="Profile" width={39} height={39} />
      </div>
    </div>
  );
};

export default Navbar;
