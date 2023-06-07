const sectionImg = "../../assets/ss.jpeg"

const SectionTitle = ({heading, subheading}) => {
    return (

        <div className="section_clip_path bg-gray-300 relative w-5/12 mx-auto text-center my-10 py-10 space-y-5">
            <p className=" text-lg underline capitalize">{subheading}</p>
            <h3 className="text-background text-3xl uppercase ">{heading}</h3>
        </div>

    );
};

export default SectionTitle;