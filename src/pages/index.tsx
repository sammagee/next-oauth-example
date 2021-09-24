import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const { data, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      <Head>
        <title>OAuth Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen min-h-screen flex items-center justify-center bg-gray-200">
        {loading && (
          <svg
            className="flex-shrink-0 animate-spin w-10 h-10 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!loading && !data && (
          <button
            className="flex items-center px-5 space-x-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 shadow-xl py-3 text-lg font-medium text-white bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 hover:opacity-75 transition hover:scale-105 duration-250 ease-in-out active:scale-95"
            onClick={() => signIn("github")}
          >
            <svg
              className="w-4 h-4 opacity-75"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>Login with GitHub</span>
          </button>
        )}

        {!loading && data && data.user && (
          <h1 className="flex items-center text-2xl font-bold space-x-1">
            <span>You made it in,</span>

            <span className="inline-flex items-center space-x-1">
              <Image
                className="rounded-full"
                src={data.user.image || ""}
                width={28}
                height={28}
                alt="Your Image"
              />

              <span>{data.user.name}!</span>
            </span>

            <button
              className="bg-clip-text bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 font-bold focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-opacity-50 focus-visible:outline-none text-transparent hover:opacity-75 transition-opacity duration-250 ease-in-out hover:underline"
              onClick={() => signOut()}
            >
              Logout?
            </button>
          </h1>
        )}
      </main>
    </>
  );
};

export default Home;
