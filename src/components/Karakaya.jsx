import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import berlin2 from './assets/berlin2.jpg'
import berlin3 from './assets/berlin3.jpg'

function Karakaya() {
  return (
    <div>

      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 role="heading" className="text-2xl dark:text-white  lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Lorem ipsum dolor sit amet consectetur.</h1>
                  <p role="contentinfo" className="text-lg dark:text-white lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam omnis asperiores aspernatur eaque maxime voluptatum exercitationem natus blanditiis unde, facere maiores repudiandae alias eligendi.</p>
                  <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                    <span aria-label="lets get started" role="button" className="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400">Click here</span>
                    <div className="pl-2">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg" alt="arrow" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={berlin2} role="img" />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h2 className="text-base text-gray-600 dark:text-gray-200 font-normal tracking-normal leading-5">Blog Post 1</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <div><h1 role="heading" className="text-2xl dark:text-white lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, ducimus!</h1></div>
                  <p role="contentinfo" className="text-lg dark:text-white lg:text-3xl leading-7 md:leading-10 f-f-r py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nisi cum cupiditate, molestiae dicta incidunt quibusdam minima? Labore, molestiae facere non nostrum, quisquam quas vitae soluta illum accusamus cum nisi ipsa perferendis aspernatur laudantium harum ea facilis esse rerum saepe pariatur. Repudiandae, et dolorem quam dolores quis soluta possimus architecto, mollitia maiores minus ut rem id exercitationem tempore hic nesciunt. Et molestiae, necessitatibus placeat dolor nemo amet quis obcaecati. Commodi inventore nam quisquam minus aspernatur ratione asperiores? Incidunt eveniet, harum quidem sapiente architecto iure. Sapiente totam, recusandae eligendi nulla dolorum delectus quis facilis ex dolore voluptatum magni vel dolor qui.</p>
                  <div className="mb-2">
                    <Link to='/' className="btn btn-base-100 btn-sm">
                      <FontAwesomeIcon className="mr-1 " icon={faArrowLeft} />
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={berlin3} alt="A group of three having a meeting" role="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Karakaya