import Typewriter from 'typewriter-effect';
const Banner = () => {




    return (
        <div className="md:grid flex flex-col-reverse md:grid-cols-2 justify-between py-10 bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg')]">
            <div className='font-bold text-5xl flex justify-center items-center text-blue-400 my-10'>
                <Typewriter
                    options={{
                        strings: ['Nagib Mahfuz', 'Web Developer', 'MERN Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="flex justify-center">
                <div className="avatar">
                    <div className="w-96 mask mask-hexagon">
                        <img src="https://lh3.googleusercontent.com/pw/AJFCJaWuJOgDcbw-GtiqWLG061BM0kgJU5Mxu7PwZWyIF4JyIXirq6Lf8qy4qQZkq37dbeGFwtFdxeK4ChtEC6EYhR7DgH8bSwPabOldYfHLDkUQrvCghwnT9XZX9ki-Yo_FFCdmobaPPx6YXNHehTvvqaKSKqLZ5Wx2oL8ihgzbh1RD5HxWsf4N9A_cdM12k0CrqLjO5vi-uS-ZhscQgMzZ16LAIRQV2mEgACSJ8HZdQU6-8m7GBfcJq4XhyoZvtCiRbN2It4akB77gadL3rmZVDSnzuUN7UP0FA6RDnCZ0hQXq0nN55XI1RLNJbubCCpD4HDZtpQbG6h4Sf7vi3lChUrhRto3YB7RJ7XkG1ABaFrvU4Zi-NMFDPJzE-2QIBiallY4j9cfHYld0qkB0y9ahxzxHkz8vIttUTBDSBMqPywZlFJYcnD8npIYoFcmJLNOhS2LKWG8_l4PWZ1UtOsJzZQ-PwZ52XBiqqsuHWO7bhP97YpZn57p9TKn03kQcaMpoResTtVPqZOMVFLIpf4x6IonRieSXznZg2hQE3X8Zz7z--Yz_9s7xp46nsWHGWNFIa6RK3LCJ7qJ_jmW9ghlNJ-8q8PCeYCIGzk9A0aOmmyDC9UK4sh2jhb7-V20u6D6E7ftvhJYW-F51YJOGT89U1TtTlgCpylgbO9goRnSEDPyQiy6FyLCbGQeRQnrcJjIvar3eHJGiDd7xHozUfRI-18CR75kb83iIY0Rs-Is0QA3BatHT-mUsZAman6R7yN_lkvh3KcHVduoPIr0b6AmpoOFMd0EUNN4-W49YHQZjbOMCqwc57wWkD7YhdFrS-MIqykCOYk2OrX2XExfYYwua6LHIxsDzg6-XZmzVaquqzJ2DAT9otnUK8NoKshq3ZPg0KCoVa3O4rfrZhcQEVn0CGP4=w625-h625-s-no?authuser=0" alt="Nagib Mahfuz" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;