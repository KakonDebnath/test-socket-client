
const SectionTitle = ({ heading, subheading, imgUrl }) => {
    return (
        <div
            className={`section_clip_path text-white relative w-full md:w-8/12 mx-auto text-center py-5 md:py-10 space-y-5 border-gray-300 border-b-[20px]`}
            style={{ background: `rgba(0, 0, 0, 0.6) url('${imgUrl}')`, backgroundBlendMode: 'overlay' }}>
            <p className="text-lg underline capitalize pt-5">{subheading}</p>
            <h3 className="text-background text-4xl uppercase font-bold">{heading}</h3>
        </div>

    );
};

export default SectionTitle;