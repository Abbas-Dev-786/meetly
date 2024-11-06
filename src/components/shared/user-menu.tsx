"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/events"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
