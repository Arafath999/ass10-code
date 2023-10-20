

const CountDown = () => {
    return (
        <div className="">
            <p className="text-2xl" data-aos="zoom-out">We have Care Your Choice. <span className="text-red-800 font-poppins font-bold underline">Next offer Get Start</span></p>
            <div className="flex gap-5 justify-center items-center">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 7 }}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 31 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default CountDown;