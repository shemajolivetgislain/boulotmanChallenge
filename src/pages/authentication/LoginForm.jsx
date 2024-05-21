import { Controller, useForm } from "react-hook-form";
import { CiUser, CiLock } from "react-icons/ci";
import Button from "../../compontents/Button";
import Input from "../../compontents/Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <div className="w-[57%] z-[1000] bg-white rounded-lg  px-10 py-16">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: "Email is required" }}
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-2">
                <label className="text-whiteTheme-darkOrange text-base font-normal">
                  Email
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    className={`!border-2 !border-slate-300 !pl-12`}
                  />
                  <div
                    className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                  >
                    <CiUser size={25} className="text-yellow-600" />
                  </div>
                </div>
                {errors.email && (
                  <p className="text-red-600 text-[13px]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: "Password is required" }}
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-2">
                <label className="text-whiteTheme-darkOrange text-base font-normal">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Your password"
                    {...field}
                    className={`!border-2 !border-slate-300 !pl-12`}
                  />
                  <div
                    className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                  >
                    <CiLock size={25} className="text-yellow-600" />
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-600 text-[13px]">
                    {errors.password.message}
                  </p>
                )}
              </div>
            );
          }}
        />
        <div className="pt-3">
          <Button
            type="submit"
            value={"Login"}
            className=" text-lg font-normal"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
