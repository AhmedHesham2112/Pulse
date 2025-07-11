import InputForm from "../ui/InputForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserSchema, type SignUpUserSchema } from "../schemas/user.schema";
import { TheButton } from "../ui/TheButton";
import { Link } from "react-router-dom";


export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUserSchema>({
    resolver: zodResolver(signUpUserSchema),
  });

  const onSubmit = (data: SignUpUserSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 w-1/2 mx-auto bg-gray-100 p-4 rounded-md items-center justify-center">
      <h1 className="text-2xl font-bold">Create an account</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full rounded-md">
      <InputForm
        label="First Name"
        id="firstName"
        {...register("firstName")}
        placeholder="Enter your first name"
        error={errors.firstName}
      />
      <InputForm
        label="Last Name"
        id="lastName"
        {...register("lastName")}
        placeholder="Enter your last name"
        error={errors.lastName}
      />
      <InputForm
        label="Email"
        id="email"
        {...register("email")}
        type="email"
        placeholder="Enter your email"
        error={errors.email}
      />
      <InputForm
        label="Password"
        id="password"
        {...register("password")}
        type="password"
        placeholder="Enter your password"
        error={errors.password}
      />
      <InputForm
        label="Confirm Password"
        id="confirmPassword"
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm your password"
        error={errors.confirmPassword}
      />
      <TheButton>Sign Up</TheButton>
    </form>
    <p className="text-sm text-primary">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
