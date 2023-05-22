import Image from 'next/image';

type Props = {
  src: string;
  title: string;
};

const GridSkills: React.FC<Props> = ({ src, title }): JSX.Element => {
  return (
    <div className="shadow-md shadow-[#5ddbe2] hover:scale-110 duration-500 z-10 bg-[#292f37] ">
      <Image
        src={src}
        width={80}
        height={80}
        alt={title}
        className="mx-auto pt-5"
      />
      <p className="my-4">{title}</p>
    </div>
  );
};

export default GridSkills;
