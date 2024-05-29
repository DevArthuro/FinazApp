import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center bg-[#FF6B35]">
      <Image src={"/logo.svg"} alt="logo finazpp" width={160} height={100} />
      <SignedOut>
        <SignInButton>
          <Button>Panel Principal</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
