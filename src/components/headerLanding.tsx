import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"logo.svg"} alt="logo finazpp" width={160} height={100} />
      <Button>Ver más</Button>
    </div>
  );
};

export default Header;
