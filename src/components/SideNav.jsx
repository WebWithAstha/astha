import { Link } from "react-router-dom"
import CircularProgress from "./CircularProgress"

const SideNav = ({ progress }) => {
  return (
    <div className="fixed print:hidden z-[999] left-0 h-screen w-20 py-4 flex flex-col lg:space-y-4 gap-4 justify-between items-center ">
      <Link to="/" >
            <h1 className='font-beiruth font-black text-2xl flex items-center justify-center backdrop-blur-2xl bg-[#f4f3e8]/[.5] pt-2 w-12 aspect-square rounded-full border-4 border-transparent'>A</h1>
      </Link>
<div className="h-10"></div>
        <div className="h-40 w-[1px] hidden flex-1 bg-dark rounded-full" />
                <CircularProgress progress={progress} />
    </div>
  )
}

export default SideNav