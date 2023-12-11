const EduAndExp = () => {
    return (
        <div className=''>
            <div className="flex flex-col w-full lg:flex-row my-16">
                <div className="grid flex-grow h-32 lg:w-1/2 card bg-base-100 rounded-box place-items-center items-center">
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold'>My Education</h3>
                        <p>Bachelor in Computer Science and Engineering</p>
                        <p>American International University Bangladesh</p>
                        <p>Study Period : 2020-Present</p>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-32 lg:w-1/2 card bg-base-100 rounded-box place-items-center">
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold'>My Experience</h3>
                        <p>Junior Frontend Developer(intern)</p>
                        <p>NEXTGEN INNOVATION LTD</p>
                        <p>Duration: September 10,2023 - December 10,2023</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EduAndExp;