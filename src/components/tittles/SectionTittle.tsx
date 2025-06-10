type Props = { title: string };

const SectionTittle = ({ title }: Props) => {
  return <h3 className=" text-3xl text-white text-center">{title}</h3>;
};

export default SectionTittle;
