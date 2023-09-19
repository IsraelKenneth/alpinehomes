import Link from "next/link"

const Login = () => {
  return (
    <Link href="login" className="lg:text-base text-sm"> 
    <button className="font-bold">
        Login
    </button>
    </Link>
  )
}

export default Login