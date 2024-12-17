import image from "../assets/scott-webb-eA2z1JSzZFI-unsplash.jpg";
import SignUpForm from "../components/SignnUpForm";

const SignUpPage = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-2 overflow-hidden">
      <div className="h-96 object-center align-item justify-item">
        <SignUpForm></SignUpForm>
      </div>
      <div className="">
        <img
          src={image}
          alt=""
          className="h-screen w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
