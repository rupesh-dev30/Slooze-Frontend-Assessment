import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex">
      <div className="w-full lg:w-2/3 flex items-center justify-center bg-white dark:bg-black">
        <div className="w-full max-w-md px-6">{children}</div>
      </div>

      <div className="w-1/3 relative h-screen hidden lg:block">
        <Image
          src={"/auth.jpeg"}
          alt="Auth background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
};

export default AuthLayout;
