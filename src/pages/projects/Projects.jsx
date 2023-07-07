import { useEffect, useState } from "react";
import ProjectsLayout from "./ProjectsLayout";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projectsData.json').then(res => res.json()).then(data => setProjects(data));
    }, []);

    console.log(projects);

    return (
        <div className="md:grid md:grid-cols-3 gap-5 container mx-auto">
            {
                projects.map((pd, index) => <ProjectsLayout key={index} project={pd}></ProjectsLayout>)
            }
        </div>
    );
};

export default Projects;