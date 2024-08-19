import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen mt-8 items-center ">
      <SignUp
        afterSignInUrl={"/onboarding/continue"}
        afterSignUpUrl={"/onboarding/continue"}
        appearance={{
          layout: {
            socialButtonsVariant: "blockButton",
          },
          variables: {
            colorPrimary: "black",
          },
        }}
      />
      ;
    </div>
  );
}
