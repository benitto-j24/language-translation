"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/Logo.png";
import dropdownImg from "../assets/images/Vector.png";
import { useState } from "react";
import { useTranslations } from "next-intl";
const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations("HomePage");

  const [open, setOpen] = useState(false);



  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="w-full h-[117.85px] flex justify-between items-center  p-4">
      <div className=" flex w-[174.48px] h-[44px]">
        <Image
          className="w-full h-full object-cover"
          src={Logo}
          alt="Logo"
        ></Image>
      </div>
      <nav>
        <ul className=" font-dm_sans flex justify-evenly gap-x-6 text-[18px]">
          <li>
            <Link href={""}>{t("menu.home")}</Link>
          </li>
          <li>
            <Link href={""}>{t("menu.about")}</Link>
          </li>
          <li>
            <Link href={""}>{t("menu.courses")}</Link>
          </li>
          <li>
            <Link href={""}>{t("menu.contact")}</Link>
          </li>
        </ul>
      </nav>
      <div
        className="flex border py-1 px-2 justify-center items-center gap-x-2 mr-[4.25rem] cursor-pointer relative"
        onClick={handleOpen}
      >
        <h5 className=" font-dm_sans select-none ">{`${locale}`}</h5>
        <Image
          className="w-[13.31px] h-[7.67px] select-none"
          src={dropdownImg}
          alt=""
        ></Image>
        {open ? (
          <div className=" absolute top-[2.3rem] bg-white px-4 left-0 py-3 border ">
            <ul className=" grid gap-y-3 select-none ">
              <li>
                <Link href={`/en`}>English</Link>
              </li>
              <li>
                <Link href={`/zh`}>Chinese</Link>
              </li>
              <li>
                <Link href={`/fr`}>French</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
