import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'





function SocialJustice() {
  return (
    <div>

      <div className="hero min-h-screen bg-[url('components/assets/berlin.jpg')] mx-auto">
        <div className=" text-center text-neutral-content glass mx-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates facere soluta, ea fugiat perspiciatis quo recusandae quas dignissimos est harum rem voluptatum asperiores repudiandae magnam aliquam possimus, provident vel placeat nihil praesentium corporis omnis architecto ipsa! Laboriosam facere optio labore temporibus debitis id harum, repellendus placeat nobis consectetur. Dignissimos saepe recusandae fugit labore ipsa mollitia officia exercitationem illo. Vel, rerum. Consectetur maxime perspiciatis tenetur beatae quo obcaecati dolore aperiam magnam, ipsum itaque commodi mollitia voluptates nam velit dolorum aspernatur veniam animi voluptate sint quae eaque. Laboriosam beatae omnis blanditiis sapiente sit voluptatibus distinctio eos. Sint optio eos temporibus ex.</p>
          </div>
          <div className="mb-2">
            <Link to='/' className="btn btn-base-100 btn-sm">
              <FontAwesomeIcon className="mr-1 " icon={faArrowLeft} />
              Back To Home
            </Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SocialJustice