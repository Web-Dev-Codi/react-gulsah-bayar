import { useFormik } from 'formik';
import * as Yup from 'yup'


function Contact() {
  // formik logic
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    //validate form 
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'Name must be 20 characters or less').required('Name is required'),
      email: Yup.string().email('Email is required').required('Email is required'),
      message: Yup.string().required('Message is required'),
      terms: Yup.array().required('Terms of service must be checked')
    }),

  })
  return (
    <>
      <div className="h-72 w-10/12 mx-auto my-10">
        <div className="w-full h-96  flex items-center justify-center">
          <form action="https://formsubmit.co/guelsah.bayar@gruene-fraktion-sz.de" method="POST" className="">
            <div className="md:flex items-center">
              <div className="md:w-72 flex flex-col">
                <label className={`text-base font-semibold leading-none text-gray-800 ${formik.touched.name && formik.errors.name ? "text-error" : ""}`} htmlFor='name'>
                  {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                </label>
                <input
                  arial-label="Please input name"
                  type="text"
                  name="name"
                  className={"text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"}
                  placeholder="Please input name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className={`text-base font-semibold leading-none text-gray-800 ${formik.touched.email && formik.errors.email ? " text-error" : ""}`}>
                  {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                </label>
                <input
                  arial-label="Please input email address"
                  type="email"
                  name="email"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <input type="hidden" name="_next" value="https://gulsah-bayar.vercel.app/success" />
            </div>
            <div>
              <div className="w-full flex flex-col">
                <label className={`text-base font-semibold leading-none text-gray-800 ${formik.touched.message && formik.errors.message ? " text-error" : ""}`}>
                  {formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}
                </label>
                <textarea
                  aria-label="leave a message"
                  type="text"
                  name="message"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className='text-xs py-2'><p>Terms of Service</p></div>
            <div className="flex mb-1">
              <label htmlFor="terms" className="text-sm">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                  className="focus:oultine-none focus:border-indigo-700 bg-gray-100 border rounded border-gray-200 mr-2"
                />
              </label>
              <p className="text-xs leading-3 text-white">By clicking submit you agree to our terms of service and your data is protected.</p>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                className="btn btn-primary text-base font-semibold leading-none text-white px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                type="submit"
              >SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact