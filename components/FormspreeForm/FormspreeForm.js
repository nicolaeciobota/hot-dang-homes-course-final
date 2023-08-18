import { Input } from "components/Input";
import { useForm, ValidationError } from "@formspree/react";
export const FormspreeForm = ({ formId }) => {
 console.log("Form ID: ", formId);
 const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
      return <h3 className=" text-5xl max-w-5xl mx-auto my-5 text-center text-pink-700 align-middle content-center">Thanks for your email</h3>;
  }
 return (<div className="align-middle mx-auto max-w-5xl py-20">
  <h3 className="text-3xl text-slate-600 text-center">Contact</h3>
    <form onSubmit={handleSubmit} className="w-full max-w-lg my-10 mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
        First Name
      </label>
      <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstName" type="text" name="First Name" placeholder="Jane" required />
    
      <ValidationError 
        prefix="First Name" 
        field="firstName"
        errors={state.errors}
      />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Last Name" id="lastName" type="text" placeholder="Doe" />
      <ValidationError 
        prefix="Last Name" 
        field="lastName"
        errors={state.errors}
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
        E-mail
      </label>
      <Input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"
        name="email" required />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" required />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
    <button className="btn" type="submit" disabled={state.submitting}>
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
    </form></div>
 )
};