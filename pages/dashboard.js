import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
import CourseCard from '../components/CourseCard'
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Dashboard () {
  // set required to true to force the page to require login.
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

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }
  
  const Course = {
		code: 'COMPSCI 325',
		name: 'Distributed System'
  }
   const Course1 = {
		code: 'COMPSCI 325',
		name: 'Distributed System'
  }
   const Course2 = {
		code: 'COMPSCI 325',
		name: 'Distributed System'
  }
   const Course3 = {
		code: 'COMPSCI 325',
		name: 'Distributed System'
  }
  const Courses = [Course, Course1, Course2, Course3]
  const htmlCourse = []
  for (const c in Courses){
			htmlCourse.push(<CourseCard code={c.code} name={c.name}></CourseCard>)
		}
  
  return (
    <Layout user={user} loading={loading}>
		<div className='view'>
			<div className='pageTitle'>
				<h1 className='pageTitle'>Your Courses</h1>
			</div>
			<div className='center'>
				<CourseCard code={Course.code} name={Course.name}>AAA</CourseCard>
				<CourseCard code={Course1.code} name={Course1.name}>AAA</CourseCard>
				<CourseCard code={Course2.code} name={Course2.name}>AAA</CourseCard>
				<CourseCard code={Course3.code} name={Course3.name}>AAA</CourseCard> 
			</div>		
			<div>		
			{htmlCourse.map(cour =>(<CourseCard code={cour.code} name={cour.name}>AAA</CourseCard>))}
			</div>	
			<div>
				<button className='btn-blue' onClick={handleClick}>Add course</button>
			</div>
		</div>
    </Layout>
  )
}

export default Dashboard
