import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between items-center mx-auto max-w-6xl p-3">

                    <Link to="/">
            <h1 className="pl-4 font-bold">
                MY AUTHENTICATION APP
            </h1>
            </Link>

            <ul className=" flex flex-row gap-8 pr-2">
                <Link to="/">
                <li>
                    Home
                </li>
                </Link>

                <Link to="/about">
                <li>
                    About
                </li>
                </Link>

                <Link to="/signin">
                <li>
                    Sign In
                </li>

                </Link>
            </ul>
        
        </div>
    </div>
  )
}
