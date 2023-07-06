import Projects from "../projects/Projects";
import SectionTitle from "./homeComponents/SectionTitle";

const ProjectsHome = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <SectionTitle title={'Projects'} subTitle={'Some of my favourite projects'}></SectionTitle>
            <Projects></Projects>
        </div>
    );
};

export default ProjectsHome;