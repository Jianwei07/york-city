import Image from "next/image";
import backgroundImage from "@/images/background-auth.jpg";

export function SplitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-full">
      <div className="flex flex-1 flex-col justify-center bg-white p-10 shadow-2xl w-1/2">
        <main className="mx-auto w-full max-w-2xl">{children}</main>
      </div>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage}
          alt=""
          unoptimized
        />
      </div>
    </div>
  );
}
