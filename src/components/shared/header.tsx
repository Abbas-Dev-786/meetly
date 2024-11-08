import React from "react";
import Link from "next/link";
import { PenBox } from "lucide-react";
import { Button } from "../ui/button";
import { shrikhand } from "@/app/layout";
import { checkUser } from "@/lib/checkUser";
import NavActions from "./nav-actions";

const Header = async () => {
  await checkUser();

  return (
    <nav className="mx-auto py-2 px-4 flex items-center justify-between shadow-md border-b-2">
      {/* logo */}
      <Link href={"/"} className="">
        <p className={`text-2xl tracking-wider ${shrikhand.className}`}>
          Meetly
        </p>
      </Link>

      {/* nav-link */}
      <div className="flex gap-4">
        <Link href={"/events?create=true"}>
          <Button className="flex justify-between gap-2">
            <PenBox size={18} /> Create Event
          </Button>
        </Link>

        {/* user avatar button */}
        <NavActions />
      </div>
    </nav>
  );
};

export default Header;
