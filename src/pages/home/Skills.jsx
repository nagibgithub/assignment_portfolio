
const Skills = () => {


    const skillsList = [
        { name: 'HTML' , image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'},
        { name: 'CSS' , image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'},
        { name: 'tailwind' , image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'},
        { name: 'javascript' , image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'},
        { name: 'react' , image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
        { name: 'firebase' , image: ''},
        { name: 'mongodb' , image: ''},
        { name: 'node' , image: ''},
    ];

    const skills = skillsList.map((pd, index) => <div key={index} className="">
        <div className="w-24">
            <img src={pd.image} />
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