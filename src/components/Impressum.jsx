import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function Impressum() {
  return (
    <div>


      <div className="lg:p-32 md:p-16 sm:p-8 min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
        <div className="w-full flex glass shadow rounded-box">
          <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <h1 className="text-3xl text-gray-900">Cool Heading</h1>
            <p className="mt-1 text-lg  text-green-400">I love Tailwind CSSs</p>
            <hr className="my-5" />
            <h2 className="text-2xl text-gray-900">Cant wait to write something here</h2>
            <p className="mt-1 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis unde sapiente similique cum asperiores sequi rerum! Magnam, deleniti sed! Labore praesentium aperiam est, harum dolorem pariatur quis unde quo fugit culpa natus. Ut officiis distinctio vitae quis laboriosam dignissimos facere modi, architecto, rerum maxime numquam laudantium voluptate sint! Magnam dignissimos libero ipsam neque accusantium aliquid repellat omnis vero sit nam maiores ad error incidunt ut, illum id nemo. Aliquid ipsa error maxime atque perspiciatis accusamus ex consequatur tenetur dolorem, recusandae repellat praesentium? Illum distinctio perferendis delectus corporis, cum eius ad, sit aspernatur et repellendus voluptatum neque accusantium dicta, aliquid architecto eos fuga qui aperiam ratione maiores incidunt quis! Consequuntur voluptas mollitia deleniti facere nesciunt vitae eligendi officia incidunt autem. Dolores molestiae, earum amet illum esse rem, quos delectus nesciunt ipsum voluptatem, non numquam. Fugiat tenetur magnam maxime incidunt ducimus quidem voluptatibus facere ex, dolor veniam temporibus ullam officia id. Quod perferendis ut quia. Earum magnam odio architecto eum esse culpa quo, reprehenderit suscipit deleniti impedit iste numquam ab ex provident? Quam earum nisi animi, quis, commodi delectus at porro eaque reprehenderit, vitae tempore nam corporis totam iure voluptas reiciendis labore itaque deleniti consequatur rerum distinctio mollitia consectetur voluptate. Voluptatibus placeat voluptates quod. Deleniti libero minima ad illum fugiat dolore sequi vel quibusdam, atque ipsum possimus dignissimos ea distinctio saepe nostrum expedita officia recusandae enim dolorum repudiandae adipisci? Consequatur facilis dolores ipsam aut, dolore illum? Non, officiis. Pariatur ea nulla eos consequuntur officiis corrupti doloribus velit laudantium ducimus tempora, non recusandae deserunt odio sit eligendi dolores et expedita, quidem consectetur error. Totam eum architecto eius nobis corrupti. Perspiciatis similique tenetur non nihil quas recusandae dicta ad aliquid distinctio molestias aperiam deleniti maiores doloribus, vitae unde alias, ipsam porro quaerat, blanditiis ut eligendi illum eveniet animi. Magni, accusantium, vel at beatae veritatis aut fuga ex possimus ipsam impedit natus earum accusamus nihil numquam magnam corporis. Itaque, maxime tenetur. Unde neque mollitia incidunt animi qui optio, ullam aliquid ratione in rem eligendi magni fugiat maxime laboriosam quis odio laborum, quod eius facere odit sed fuga adipisci minima sunt. Quaerat molestiae veniam corporis! Sequi minima distinctio, pariatur ipsam recusandae iste nisi, id nesciunt atque harum, numquam similique tempore consequuntur? Doloribus blanditiis eum neque natus culpa nemo itaque harum porro, reiciendis eos ipsa, ut quas architecto, beatae quae aspernatur cupiditate veniam? Odit aliquam, nemo voluptate assumenda laboriosam ullam tempora ducimus, beatae optio eaque natus quae sit iure error nesciunt adipisci soluta omnis facilis magni nostrum atque nam libero repudiandae. Velit maxime tenetur, praesentium laudantium, in consequatur cum ipsam odit dolores, quae placeat doloribus facere magnam ex hic deserunt unde porro soluta itaque fuga. Explicabo, officiis. Distinctio nostrum, veniam inventore eveniet maxime aspernatur, et quos accusantium beatae error cupiditate minus non, unde sint id nemo. Veniam laborum omnis nesciunt veritatis qui dignissimos perferendis necessitatibus aliquam doloremque quibusdam quas illo nisi unde iste, beatae ipsam harum eius eos, tempora fugiat fuga saepe! Blanditiis quisquam suscipit a dignissimos, delectus numquam. Harum voluptatum fugiat voluptas vel, minima reprehenderit.</p>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <Link to='/' className="btn btn-base-100 btn-sm">
          <FontAwesomeIcon className="mr-1 " icon={faArrowLeft} />
          Back To Home
        </Link>
      </div>


    </div>
  )
}

export default Impressum