import { NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <h1 className="text-center text-4xl">{session?.user?.email}</h1>
    </>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
