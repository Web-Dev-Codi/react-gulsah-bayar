import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Gülsah Bayar</h1>
      <p className='mb-4 text-2xl font-light'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quis ea saepe natus dolorum? Saepe nulla ex consectetur sunt laboriosam! Obcaecati voluptatibus, debitis dolorem non iusto, quibusdam tempore natus perspiciatis nostrum omnis quae dicta voluptatem. Error numquam expedita dicta laboriosam repellat facilis vel quibusdam pariatur dolorem rem illo omnis dolorum explicabo maxime, ab consectetur aliquid deserunt in delectus nisi. Reiciendis esse, culpa, amet optio aperiam eveniet pariatur at dicta blanditiis, inventore neque. Facere dolorem quam dolorum porro modi placeat! Doloribus iusto rerum animi inventore porro est, asperiores numquam minus eligendi doloremque nobis. Officia quibusdam aperiam distinctio laboriosam velit aliquid cum.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.2.56</span>
      </p>
      <p className='text-lg text-gray-400'>
        Site Built by Brian Cordisco
      </p>
      <div className="mb-2">
        <Link to='/' className="btn btn-base-100 btn-sm">
          <FontAwesomeIcon className="mr-1 " icon={faArrowLeft} />
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default AboutMe