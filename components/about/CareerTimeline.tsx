import TimelineItem from '@/components/about/TimelineItem'

export const EXPERIENCES = [
  {
    org: 'Freelance',
    url: '/',
    logo: '/static/images/experience/mylogo.png',
    start: 'Aug 2024',
    end: 'Present',
    title: 'Fullstack Developer',
    icon: 'man-technologist',
    event: 'career-freelance',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Build{' '}
            <a href="/" rel="noopener noreferrer" target="_blank">
              Personal Website
            </a>{' '}
            - Developed and maintained my personal website, including blog, portfolio, and resume.
          </li>
          <li>- Designed PostgreSQL database schema for efficient financial data storage</li>
        </ul>
      )
    },
  },
  {
    org: 'ForALL Founders Inc.',
    url: 'https://www.tefaafrik.com/',
    logo: '/static/images/experience/logotefa.png',
    start: 'Apr 2022',
    end: 'Jun 2024',
    title: 'Fullstack Developer',
    icon: 'man-technologist',
    event: 'career-tefa',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Implemented progress tracking and certification generation features for an e-learning
            platform
          </li>
          <li>Created custom user authentication flow with role-based access control</li>
          <li>
            Built advanced search functionality with autocomplete using Django's search capabilities
          </li>
        </ul>
      )
    },
  },
  {
    org: 'ENEO DOUALA – CAMEROON',
    url: '/',
    logo: '/static/images/experience/eneologo.jpeg',
    start: 'Jun 2020',
    end: 'Apr 2022',
    title: 'Power Systems Engineer',
    icon: 'man-technologist',
    event: 'career-eneo',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Performed Energy Audit of Electrical Installations</li>
          <li>
            Designed system layouts, including substations, transformers, and protection schemes
          </li>
        </ul>
      )
    },
  },
  {
    org: 'ASPY',
    url: '/',
    logo: '/static/images/experience/aspy.jpeg',
    start: 'Dec 2018',
    end: 'Jun 2020',
    title: 'Mathematics Tutor',
    icon: 'man-technologist',
    event: 'career-aspy',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Delivered engaging lectures in Real Analysis I & II, Abstract Algebra, and Linear
            Algebra
          </li>
          <li>Taught advanced topics in Multilinear Algebra</li>
        </ul>
      )
    },
  },
  {
    org: 'NATIONAL ADVANCED SCHOOL OF ENGINEERING YAOUNDÉ (NASEY) - UNIVERSITY OF  YAOUNDÉ I',
    url: 'https://uy1.uninet.cm/',
    logo: '/static/images/experience/logouy1.jpg',
    start: 'Sept 2013',
    end: 'Aug 2018',
    title: 'Student at NASEY - UY1',
    icon: 'man-technologist',
    event: 'career-uy1',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Graduated from the Electrical Engineering program.</li>
        </ul>
      )
    },
  },
]

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={`${experience.org}-${experience.start}`} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
)

export default CareerTimeline
