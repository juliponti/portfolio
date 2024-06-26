import { FieldValues, useForm } from "react-hook-form";
import Label from "../../components/ui/label";
import Input from "../../components/ui/input";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from "../../components/ui/button";

const registerOptions = {
  firstName: { required: "First name is required" },
  lastName: { required: "Last name is required" },
  email: {
    required: "Email is required",
    pattern:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  subject: { required: "Subject is required" },
  message: { required: "Message is required" },
};

export default function ContactForm() {
  const { register, handleSubmit, ...form } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const handleSendForm = async (data: FieldValues) => {
    const { firstName, lastName, email, subject, message } = data;
    try {
      setIsDisabled(true);
      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        from_subject: subject,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_USER_ID,
        }
      );

      toggleAlert("Message sent successfully!", "success");
      form.reset();
    } catch (e) {
      toggleAlert("Uh oh. Something went wrong...", "danger");
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSendForm)}
        className="w-full md:max-w-[850px] mx-auto"
      >
        <div className="wrapper flex flex-col items-center">
          <div className="block w-full">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full md:w-2/4">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  register={register}
                  registerOption={registerOptions.firstName}
                  errors={form.formState.errors}
                />
              </div>
              <div className="w-full md:w-2/4">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  register={register}
                  registerOption={registerOptions.lastName}
                  errors={form.formState.errors}
                />
              </div>
            </div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              register={register}
              registerOption={registerOptions.email}
              errors={form.formState.errors}
            />
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              name="subject"
              register={register}
              registerOption={registerOptions.subject}
              errors={form.formState.errors}
            />
            <Label htmlFor="message">Message</Label>
            <div className="mb-5">
              <textarea
                id="message"
                className="w-full border border-[#2C2C2C] p-2 overflow-auto resize-none h-52  font-sans text-sm font-normal focus-visible:outline-primary-200"
                {...register("message", registerOptions.message)}
                name="message"
              ></textarea>
              <small className="text-sm text-red-700">
                {form.formState.errors?.message &&
                  form.formState.errors.message.message?.toString()}
              </small>
            </div>
          </div>
          <Button
            disabled={isDisabled}
            type="submit"
            className="mt-5 mb-20 bg-[#F3F6F4]"
          >
            {isDisabled ? (
              <>
                <Loader2 className="animate-spin" height={16} />{" "}
                <span>Sending...</span>
              </>
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </form>
      {alertInfo.display && (
        <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
          <div
            className={`text-base pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all alert-${alertInfo.type}`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className=""
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
