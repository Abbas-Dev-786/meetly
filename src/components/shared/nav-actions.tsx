"use client";
import React from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";

const NavActions = () => {
  return (
    <>
      <SignedIn>
        <UserMenu />
      </SignedIn>
      {/* login button */}
      <SignedOut>
        <SignInButton>
          <Button variant="outline">Login</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default NavActions;
