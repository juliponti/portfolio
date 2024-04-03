import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface InputProps {
  type: "text" | "email";
  name: string;
  id?: string | undefined;
  register: UseFormRegister<FieldValues>;
  registerOption: RegisterOptions<FieldValues>;
  errors?: FieldErrors<FieldValues>;
}

export default function Input({
  type,
  name,
  id,
  register,
  registerOption,
  errors,
}: InputProps) {
  return (
    <div className="mb-5">
      <input
        type={type}
        id={id}
        className="h-10 w-full border border-[#2C2C2C] p-2 font-sans text-sm font-normal focus-visible:outline-primary-200"
        {...register(name, registerOption)}
        name={name}
      />
      <small className="text-sm text-red-700">
        {errors?.[name] && errors?.[name]?.message?.toString()}
      </small>
    </div>
  );
}
