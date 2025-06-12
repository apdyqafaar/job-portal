import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-between py-6">
        <Link to={"/"}>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500  to-pink-500 text-transparent bg-clip-text">
            HYper-J
          </h2>
        </Link>
         <div>
            {/* <Button variant={"outline"}>Login</Button> */}
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
          </div>
      </div>
    </nav>
  );
};
