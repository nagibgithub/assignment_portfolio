
const Skills = () => {


    const skillsList = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'tailwind' },
        { name: 'javascript' },
        { name: 'react' },
        { name: 'firebase' },
        { name: 'mongodb' },
        { name: 'node' },
    ];

    const skills = skillsList.map((pd, index) => <div key={index} className="avatar">
        <div className="w-24 mask mask-hexagon">
            <img src={''} />
            <h1>{pd.name}</h1>
        </div>
    </div>);

    return (
        <div className="my-10">
            <div className="text-center">
                <h1 className="text-5xl font-bold" >Professional Skill</h1>
            </div>
            <div className="flex justify-center items-center">
                {skills}
            </div>
        </div>
    );
};

export default Skills;