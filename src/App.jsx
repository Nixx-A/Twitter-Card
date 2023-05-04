import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const users = [
    {
      userName: 'Nicolas_Ayan',
      name: 'Nicolas Ayan',
      isFollowing: true
    },
    {
      userName: 'Nicolas_Ayan_',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
    <section className='App'>
       {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
