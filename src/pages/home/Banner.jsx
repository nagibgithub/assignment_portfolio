import Typewriter from 'typewriter-effect';
import Atropos from 'atropos/react';



const Banner = () => {

    return (
        <div className="md:grid flex flex-col-reverse md:grid-cols-2 justify-between py-10 my-20">
            <div className='font-bold text-5xl nagib-font-mono flex justify-center items-center my-10'>
                <Typewriter
                    options={{
                        strings: ['Nagib Mahfuz', 'Web Developer', 'MERN Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="flex justify-center">
                <Atropos className="my-atropos" shadow={false}>
                    <div className="avatar">
                        <div className="w-96 mask mask-hexagon">
                            <img src="https://raw.githubusercontent.com/nagibgithub/assignment_portfolio/main/src/assets/nagib-mahfuz.jpg" alt="Nagib Mahfuz" />
                        </div>
                    </div>
                </Atropos>
            </div>
        </div>
    );
};

export default Banner;