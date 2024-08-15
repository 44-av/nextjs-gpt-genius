const { SignIn, ClerkProvider } = require("@clerk/nextjs");

const SignInPage = () => {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex justify-center items-center">
        <SignIn />
      </div>
    </ClerkProvider>
  );
};

export default SignInPage;
