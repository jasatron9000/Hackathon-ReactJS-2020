import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
import CourseCard from '../components/CourseCard'
import { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>


function Dashboard () {
  // set required to true to force the page to require login.

  //const [classes, setClasses] = useState([]);

  const { user, loading } = useFetchUser({ required: false })

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value
      // date: added server side so we can't lie
    }
    await fetch(`${config.HOST}/api/events`, {
      method: 'post',
      body: JSON.stringify(event)
    })

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  }
    let userInfo
    const [classes, setClasses] = useState([])
    // fetch data
    useEffect(() => {
      const fetchClasses = async () => {
        const callInfo = await fetch(`http://localhost:3141/api/me`)
        const userInfo = await callInfo.json()
        console.log(userInfo)

        const res = await fetch(`${config.HOST}/api/classes`)
        const classesJson = await res.json()
        setClasses(classesJson)
      }
      fetchClasses()
    }, [])


  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }

   return (
    <div>
        {loading ? <>Loading Sidebar...</>:(<><SideBar user={user}/></>)}
		<div className='view w-4/5 float-right'>
			<div className='pageTitle'>
				<h1 className='pageTitle'>Your Courses</h1>
			</div>
			<div className='center'>
				{classes.map(cour =>(<CourseCard course={cour}>AAA</CourseCard>))}
			</div>
			<div className="inline-block relative w-64">
			  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
				<option>Really long option that will likely overlap the chevron</option>
				<option>Option 2</option>
				<option>Option 3</option>
			  </select>
			  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
				<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
			  </div>
			</div>
			<div>
				<button className='btn-blue' onClick={handleClick}>Add course</button>
			</div>
			
		</div>
    </div>
  )
}

export default Dashboard
