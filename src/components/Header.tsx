

const HeaderComponent = () => {

    return <>

        <header className="flex flex-col justify-center items-center p-20 gap-20">
            <h3 className="mt-10 text-6xl text-center font-black text-white"> 
                ¡HOLA! <br/><br/>SOY <span className="text-orange-400">THOMAS</span> RESTREPO
            </h3>
            <img 
            className="rounded-full w-64 h-64 object-cover"
            src="/assets/yo.jpeg" alt="" />
        </header>
    </>
}

export default HeaderComponent