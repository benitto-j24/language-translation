import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <main>
        <div className="w-full h-[720px] bg-home flex justify-center items-center">
          <h1 className=" text-[56px] max-w-[1207px] h-[198px] text-center font-plus_Jakarta">
            {t("headings")}
          </h1>
        </div>
      </main>
    </>
  );
}
