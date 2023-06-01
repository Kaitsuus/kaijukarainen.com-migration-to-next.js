import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

interface SocialIconsProps {
  linkedin: string;
  github: string;
  youtube: string;
  facebook: string;
  instagram: string;
}

function SocialIcons({
  linkedin,
  github,
  facebook,
  instagram,
}: SocialIconsProps): JSX.Element {
  return (
    <div className="hidden lg:flex fixed flex-col top-[30%] 2xl:top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-4"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} className="mr-4" />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-4"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub size={30} className="mr-4" />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-4"
            href={facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook <FaFacebook size={30} className="mr-4" />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fb3958]">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-4"
            href={instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram <FaInstagram size={30} className="mr-4" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
