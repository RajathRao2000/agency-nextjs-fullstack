"use client";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { login } from "@/lib/actions";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import PrimaryBtn from "../HomePage/ui/PrimaryBtn/PrimaryBtn";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  // const router = useRouter();
  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <PrimaryBtn styles={{ width: "auto" }} value={"Login"} />
      {state?.error}
      <Link href={"/register"}>
        {" Don't an account?"} <b>Login</b>
      </Link>
    </form>
  );
};

export default LoginForm;
