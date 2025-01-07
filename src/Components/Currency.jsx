import React from "react";
import payment_logos from "../assets/Images/payment_logo.png";
import Button from "../Dashboard/components/Button";
import Customize_Payment from "../Dashboard/components/Customize_Payment";
import { useAuth } from "../auth/AuthContextWeb";

const Currency = () => {
  const { user, loading } = useAuth();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <section className="container mx-auto bg-white">
      {!user ? (
        <div className="Currency-main">
          <div className="flex items-center justify-center my-4">
            <img src={payment_logos} alt="" className="lg:max-w-screen-md" />
          </div>
          <div className="relative flex items-center justify-center space-x-4">
            <Button to="/signin">Sign-In</Button>
            <Button to="/signup">Sign-Up</Button>
          </div>
          <div className="flex justify-center">
            {/* <hr className="mt-10 w-[80%]" /> */}
          </div>
        </div>
      ) : (
        <Customize_Payment />
      )}
    </section>
  );
};

export default Currency;
