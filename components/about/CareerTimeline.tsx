import TimelineItem from '@/components/about/TimelineItem'

export const EXPERIENCES = [
  {
    org: 'Jolera Inc.',
    url: 'https://www.tefaafrik.com/',
    logo: '/static/images/experience/logotefa.png',
    start: 'June 2024',
    end: 'Aug 2025',
    title: 'Bilingual System Support Professional',
    icon: 'man-technologist',
    event: 'career-tefa',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          {/* <li>
            Implemented progress tracking and certification generation features for an e-learning
            platform, boosting learners' success by 40%
          </li>
          <li>
            Implemented secure user authentication (JWT/OAuth) and role-based access control (e.g.,
            admin/instructor/learner roles)
          </li>
          <li>
            Designed and implemented secure RESTful APIs, integrating third-party services like
            payment gateways.
          </li>
          <li>
            Automated CI/CD with GitHub Actions: linting, testing (Jest), and deployment to AWS
            Lambda functions.
          </li>
          <li>
            Collaborated with UX designers to implement A/B testing, increasing user retention by
            15%.
          </li> */}
        </ul>
      )
    },
  },
  {
    org: 'ForALL Founders Inc.',
    url: 'https://www.tefaafrik.com/',
    logo: '/static/images/experience/logotefa.png',
    start: 'Dec 2018',
    end: 'June 2024',
    title: 'System Architect - Bilingual Customer Support',
    icon: 'man-technologist',
    event: 'career-tefa',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          {/* <li>
            Implemented progress tracking and certification generation features for an e-learning
            platform, boosting learners' success by 40%
          </li>
          <li>
            Implemented secure user authentication (JWT/OAuth) and role-based access control (e.g.,
            admin/instructor/learner roles)
          </li>
          <li>
            Designed and implemented secure RESTful APIs, integrating third-party services like
            payment gateways.
          </li>
          <li>
            Automated CI/CD with GitHub Actions: linting, testing (Jest), and deployment to AWS
            Lambda functions.
          </li>
          <li>
            Collaborated with UX designers to implement A/B testing, increasing user retention by
            15%.
          </li> */}
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
