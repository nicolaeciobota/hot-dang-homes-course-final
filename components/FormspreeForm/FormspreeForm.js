import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-64}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="mx-auto max-w-xl lg:max-w-4xl text-center">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Thank you!
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Your message has been sent. We&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative isolate bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 h-[64rem] w-[128rem] stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
      </div>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact Hot Dang Homes
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Hot Dang Homes is a global brand with a network of over 300 offices worldwide, the flagship UK showroom is situated in Park Lane in London. With a detailed understanding and excellent track record of marketing properties in the upper quartile.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form onSubmit={handleSubmit} className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      name="First Name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600"
                      placeholder="Jane"
                      required
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="lastName"
                      name="Last Name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600"
                      placeholder="Doe"
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600"
                      placeholder="you@email.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">
                    Phone
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600"
                      placeholder="+1 (555) 000-0000"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600"
                      placeholder="How can we help you?"
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="block w-full rounded-md bg-pink-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Let's Talk"}
                </button>
              </div>
              <p className="mt-4 text-sm/6 text-gray-500">
                By submitting this form, I agree to the{' '}
                <a href="#" className="whitespace-nowrap font-semibold text-pink-600">
                  privacy policy
                </a>
                .
              </p>
              {state.errors && state.errors.length > 0 && (
                <div className="mt-4 text-red-600 text-sm">
                  Please fix the errors above and try again.
                </div>
              )}
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <div className="h-12 w-auto text-pink-600 font-bold text-2xl">
                Hot Dang Homes
              </div>
              <figure className="mt-10">
                <blockquote className="text-lg/8 font-semibold text-gray-900">
                  <p>
                    &ldquo;We buy any home quickly for cash. Guaranteed sale. In your timescale. No fees, no stress, no problem.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <div className="size-12 flex-none rounded-full bg-gray-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faHouseUser} className="text-2xl text-pink-600" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900">Property Expert</div>
                    <div className="text-sm/6 text-gray-600">Hot Dang Homes</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};