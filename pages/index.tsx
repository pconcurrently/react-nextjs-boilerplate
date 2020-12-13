import { useIntl } from 'react-intl'

const Home = () => {
  const { formatMessage: f } = useIntl()

  return <div>{f({ id: 'welcomeText' })}</div>
}

export default Home
