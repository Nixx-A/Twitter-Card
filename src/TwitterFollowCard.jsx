import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, SetisFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with username', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClassName = isFollowing
    ? 'tw-followCard-btn is-following'
    : 'tw-followCard-btn'

  const handleClcik = () => {
    SetisFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='avatar'
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'></span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleClcik}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
