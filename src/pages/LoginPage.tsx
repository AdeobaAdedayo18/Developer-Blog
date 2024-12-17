import image from "../assets/florian-klauer-mk7D-4UCfmg-unsplash.jpg";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-2 overflow-hidden">
      <div className="h-96 object-center align-item justify-item">
        <LoginForm></LoginForm>
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

export default LoginPage;
