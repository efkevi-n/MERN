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
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Sign In
                </li>
            </ul>
        
        </div>
    </div>
  )
}
