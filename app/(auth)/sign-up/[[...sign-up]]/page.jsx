import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <section className="h-screen flex items-center justify-center">
      <SignUp />
    </section>
    </>
  )
}
