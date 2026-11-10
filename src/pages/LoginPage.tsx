import React from "react";
import LoginCard from "../components/LoginCard";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <LoginCard>
        <LoginForm />
      </LoginCard>
    </div>
  );
};

export default LoginPage;