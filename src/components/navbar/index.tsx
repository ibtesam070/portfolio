import React from "react";
import { RiMenuFill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Navbar = () => {
  const IALogo = ({ size }: { size: "small" | "medium" | "large" }) => {
    const textSize =
      size === "small"
        ? "text-xl"
        : size === "medium"
        ? "text-2xl"
        : size === "large"
        ? "text-3xl"
        : "text-3xl";
    return (
      <div className="flex">
        <p className={`font-bold text-gray-400 ${textSize}`}>{`{`}</p>
        <p className={`font-bold text-gray-200 ${textSize}`}>{`IA`}</p>
        <p className={`font-bold text-gray-400 ${textSize}`}>{`}`}</p>
      </div>
    );
  };

  return (
    <header className="w-full flex p-5">
      <IALogo size="large" />
      <Sheet>
        <SheetTrigger asChild>
          <RiMenuFill className="text-gray-200 text-3xl ml-auto sm:hidden" />
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <SheetHeader className="pl-4 pt-4">
            <SheetTitle>
              <IALogo size="small" />
            </SheetTitle>
          </SheetHeader>
          <Separator className="mt-4 h-px bg-gray-600" />
          <div className="flex flex-col pl-6 pt-2">
            <SheetClose asChild>
              <Link href="#" className="my-5">
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#career" className="my-5">
                Career
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#skills" className="my-5">
                Skills
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#projects" className="my-5">
                Projects
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
