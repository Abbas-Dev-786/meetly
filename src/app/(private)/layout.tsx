"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import { sidebarItems } from "@/data";
import Link from "next/link";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { isLoaded } = useUser();

  return (
    <>
      {!isLoaded && <BarLoader width="100%" color="#36d7b7" />}

      <div>
        <aside>
          <nav>
            <ul>
              {sidebarItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center p-4 text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {children}
    </>
  );
};

export default DashboardLayout;
