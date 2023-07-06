import Marquee from "react-fast-marquee";
import Atropos from 'atropos/react';
import SectionTitle from "./homeComponents/SectionTitle";



const Skills = () => {


    const skillsList = [
        { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
        { name: 'tailwind', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'javascript', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
        { name: 'react', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'firebase', image: 'https://raw.githubusercontent.com/nagibgithub/assignment_portfolio/main/src/assets/firebase-svgrepo-com.svg' },
        { name: 'mongodb', image: 'https://raw.githubusercontent.com/nagibgithub/assignment_portfolio/main/src/assets/mongodb-icon.svg' },
        { name: 'node', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    ];

    const skills = skillsList.map((pd, index) => <div key={index} className="cursor-pointer mx-5 text-center h-56 flex justify-center items-center">
        <div className="w-32 tooltip tooltip-bottom" data-tip={pd.name}>
            <Atropos
                className="my-atropos"
                shadow={false}
                activeOffset={40}
                onEnter={() => console.log('Enter')}
                onLeave={() => console.log('Leave')}
                onRotate={(x, y) => console.log('Rotate', x, y)}
            >
                <img className="hover:w-32 w-24" src={pd.image} />
            </Atropos>
        </div>
    </div>);

    return (
        <div className="my-10 min-h-screen flex flex-col justify-center">
            <div className="text-center my-5">
                <SectionTitle title={'Professional Skills'} subTitle={'Skills that that can I show'}></SectionTitle>
            </div>
            <div className="flex justify-center items-baseline my-5">
                <Marquee pauseOnHover='true'>
                    {skills}
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;