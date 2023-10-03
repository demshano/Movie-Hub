import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
  <>
  
  
<footer className="p-2 bg-white  shadow  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline hover:text-sky-700">Movie Mate™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a  href="#" target='_blank' className="mr-4 hover:underline md:mr-6 hover:decoration-blue-500 ">Instagram</a>
        </li>
        <li>
            <a  href="#" target='_blank' className="mr-4 hover:underline md:mr-6 hover:decoration-blue-500">You Tube</a>
        </li>
        <li>
            <a  href="www.linkedin.com/in/deshan-manodya-8591ba215" target='_blank' className="mr-4 hover:underline md:mr-6 hover:decoration-blue-500">Linkdin</a>
        </li>
        <li>
            <a href="https://github.com/demshano" target='_blank'  rel='githubLink' className="hover:underline hover:decoration-blue-500">GitHub</a>
        </li>
    </ul>
    </div>
</footer>

  
  </>
  )
}
