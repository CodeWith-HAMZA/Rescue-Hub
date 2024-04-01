import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen mt-8 items-center ">
      <SignIn
        appearance={{
          layout: {
            socialButtonsVariant: "blockButton",
          },
          variables: {
            colorPrimary: "black",
          },
        }}
      />
    </div>
  );
}
