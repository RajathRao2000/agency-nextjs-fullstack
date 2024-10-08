"use client";
import styles from "./adminUserForm.module.css";

import { addUser } from "@/lib/actions";
import { useFormState } from "react-dom";
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="User Name" />
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="URL for User Avatar" />
      <select name="isAdmin" id="">
        <option value="isAdmin">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
