import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
import YearCard from '../components/YearCard'
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
  
  const Year = 2017
  const Year1 = 2018
  const Year2 = 2019
  const Year3 = 2020
  const Years = [Year, Year1, Year2, Year3]
  const htmlYears = []
  for (const y in Years){
			htmlYears.push(<YearCard>{y}</YearCard>)
		}
  
  return (
    <Layout user={user} loading={loading}>
		<div className='view'>
			<div className='pageTitle'>
				<h1 className='pageTitle'>Course Name</h1>
				<h2 className='pageTitle'>Exams</h2>
			</div>
			<div className='center'>
				<YearCard year={Year}>{Year}</YearCard>
				<YearCard year={Year1}>{Year1}</YearCard>
				<YearCard year={Year2}>{Year2}</YearCard>
				<YearCard year={Year3}>{Year3}</YearCard>
			</div>		
			<div>		
			{htmlYears}
			</div>	
		</div>
    </Layout>
  )
}

export default Dashboard
