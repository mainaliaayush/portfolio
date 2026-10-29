function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Aayush</h1>
            <ul className="flex gap-6">
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
