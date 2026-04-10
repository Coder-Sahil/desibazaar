import desiBazaarLogo from '../../assets/desiBazaarLogo.svg'

const ComingSoon = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <img src={desiBazaarLogo} className="" width="500" height="300" alt="" />
                <h1 className="text-5xl font-bold">
                    Bazaar Opening Shortly ..
                </h1>
            </div>
        </>
    )
}

export default ComingSoon;