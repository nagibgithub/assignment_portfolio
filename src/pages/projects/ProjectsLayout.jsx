import Atropos from 'atropos/react';

const ProjectsLayout = ({ project }) => {

    const { name, live, client_code, server_code, img_home, img_list } = project
    const webPageImages = img_list.map((pd, index) => <div key={index} className="border-2 p-5"><img className="w-32" src={pd} alt="page" /></div>);

    return (
        <div className="flex flex-col justify-center items-center my-10 border-2 border-sky-500 rounded-2xl p-5 shadow-lg shadow-sky-600">
            <Atropos shadow={false} className='cursor-pointer'>
                <img src={img_home} alt="Web Site Home Page" />
                {/* <ModalImage small={img_home} large={img_home} alt="Site Home" />; */}
            </Atropos>
            <h1>{name}</h1>
            <a href={live}><button>Live Link</button></a>
            <a href={client_code}><button>Client Side Code</button></a>
            <a href={server_code}><button>Server Side Code</button></a>
            <div className="grid grid-cols-3">
                {webPageImages}
            </div>
        </div>
    );
};

export default ProjectsLayout;