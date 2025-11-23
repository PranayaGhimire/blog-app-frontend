import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


const RegisterPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Enter your credentials below to create your account
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link href={`/auth/login`}>Sign In</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
            <RegisterForm/>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
