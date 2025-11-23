'use client'

import { useLogin } from "@/api/authApi";
import { ILogin} from "@/types/authType";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mutate, isPending } = useLogin();
  const onSubmit = (data: ILogin) => {
    mutate(data, {
      onSuccess: (response) => {
        toast.success(response.message);
        dispatch(setAuth({
          token:response.token,
          user:response.user
        }))
        router.push("/");
      },
      onError: () => toast.error("Oops! something went wrong"),
    });
  };
  const { register, handleSubmit } = useForm<ILogin>();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              {...register("password")}
              type="password"
              placeholder="john@123"
              required
            />
          </div>
          <Button
            disabled={isPending}
            className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer"
          >
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
