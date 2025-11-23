"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useRegister } from "@/api/authApi";
import {useForm} from "react-hook-form";
import { IRegister } from "@/types/authType";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const RegisterForm = () => {
  const router = useRouter();
  const {mutate,isPending} = useRegister();
  const onSubmit = (data:IRegister) => {
     mutate(data,{
        onSuccess: (response) => {
            toast.success(response.message);
            router.push("/auth/login");
        },
        onError:() => toast.error("Oops! something went wrong")
     })
  }
  const {register,handleSubmit} = useForm<IRegister>(); 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              {...register('username')}
              placeholder="john"
              required
            />
          </div>
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
              <Label htmlFor="password">Password</Label>
              <Input {...register("password")}  type="password" placeholder="john@123" required />
          </div>
          <Button disabled={isPending} className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
