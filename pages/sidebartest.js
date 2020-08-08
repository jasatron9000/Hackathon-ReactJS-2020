import { useFetchUser } from '../lib/user'
import CourseNavigation from '../components/CourseNav'

let school = {
    "courses" : ["A", "b", "c", "d"]
}

const SideBar = ({user}) =>{
    return(
        <div className = "w-1/5 h-screen bg-gray-400 absolute left-0 items-center rounded-md p-8 m-2" >
            <div>
                <img className = "rounded-md" src = {user.picture} alt="User Picture"/>
            </div>
            <div>
                <h2 className ="text-3xl font-extrabold text-center">{user.name}</h2>
                <h1 className ="text-2xl font-extrabold text-center">{user.nickname}</h1>
            </div>
            <div> 
                <CourseNavigation courses = {school.courses}/>
            </div>
        </div>
    )
}

function SideBarTest () {
  const { user, loading } = useFetchUser({ required: true })
  return (
    <div>
      {loading ? <>Loading Sidebar...</>
        : (
          <>
            <SideBar user={user} />
          </>)}
    </div>
  )
}

export default SideBarTest