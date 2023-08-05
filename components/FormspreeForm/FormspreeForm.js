import { Input } from "components/Input";
import { useForm, ValidationError } from "@formspree/react";
export const FormspreeForm = ({ formId }) => {
 console.log("Form ID: ", formId);
 const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
      return <p className="max-w-5xl mx-auto my-5">Thanks for joining!</p>;
  }
 return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
      <label htmlFor="email">
        Email Address
      </label>
      <Input 
       id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea className="border-2 p-1 border-slate-400 hover:border-slate-500 my-2"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /><div>
        <button className="btn" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
 )
};