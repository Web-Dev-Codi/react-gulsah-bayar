import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function PublicAdministration() {
  return (
    <div>PublicAdministration

      <div className="mb-2 shadow rounded-box">
        <Link to='/' className="btn btn-base-100 btn-sm">
          <FontAwesomeIcon className="mr-1 " icon={faArrowLeft} />
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default PublicAdministration