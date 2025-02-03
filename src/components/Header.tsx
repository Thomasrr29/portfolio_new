

const HeaderComponent = () => {

    return <>

        <header className="flex flex-col justify-center items-center p-20">
            <img 
            className="size-40 rounded-full w-46 h-46"
            src="../public/assets/yo.jpeg" alt="" />
            <h3 className="mt-10 text-6xl text-center font-black text-white"> 
                ¡HOLA! <br/><br/>YO SOY <span className="text-orange-400">THOMAS</span> RESTREPO
            </h3>
        </header>
    </>
}

export default HeaderComponent