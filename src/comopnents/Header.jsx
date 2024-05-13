export const Header = () => {
    return (
        <header className="p-8 max-w-5xl m-auto">
            <div className='flex flex-col justify-between items-center lg:flex-1 w-full text-xl text-yellow-50 sm:flex-row'>
                <img className="h-9 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Tailwind" />
                <p className="">Luis Filipe</p>
                <p>Desenvolvedor Front-end</p>
            </div>
        </header>
    )
}