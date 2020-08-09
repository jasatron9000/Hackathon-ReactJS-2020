import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
import CourseCard from '../components/CourseCard'
import { useState, useEffect } from 'react'
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>


function Dashboard () {
  const { user, loading } = useFetchUser({ required: false })

  const [classes, setClasses] = useState([])
    // fetch data
    useEffect(() => {
      const fetchClasses = async () => {
        const callInfo = await fetch(`http://localhost:3141/api/me`)
        const userInfo = await callInfo.json()
        console.log(userInfo)
        const a = await fetch(`http://localhost:3141/api/users/${userInfo.sub}`)
        const b = await a.json()
        const c = await b.classes
        console.log(c)
        let classesArray = []
        c.forEach(async (d) => {
          console.log(d)
          const res = await fetch(`${config.HOST}/api/classes/${d}`)
          const classesJson = await res.json()
          console.log(classesJson)
          classesArray.push(classesJson)
        })
        console.log(classesArray)
        setClasses(classesArray)
      }
      fetchClasses()
    }, [])
    
  const Courses = []
   return (
    <Layout user={user} loading={loading}>
		<div className='view'>
			<div className='pageTitle'>
				<h1 className='pageTitle'>Your Courses</h1>
			</div>
			<div className='center'>
				{classes.map(cour =>(<CourseCard course={cour}>AAA</CourseCard>))}
			</div>
		</div>
    </Layout>
  )
}

export default Dashboard
