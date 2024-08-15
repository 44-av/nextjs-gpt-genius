const { SignUp, ClerkProvider } = require("@clerk/nextjs");

const SignUpPage = () => {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex justify-center items-center">
        <SignUp />
      </div>
    </ClerkProvider>
  );
};

export default SignUpPage;
