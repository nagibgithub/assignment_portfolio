
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="container mx-auto my-5">
            <hr className="border-2 border-sky-400" />
            <div className="my-5 text-center">
                <h1 className="text-5xl">{title}</h1>
                <h2 className="my-3">{subTitle}</h2>
            </div>
            <hr className="border-2 border-sky-400" />
        </div>
    );
};

export default SectionTitle;