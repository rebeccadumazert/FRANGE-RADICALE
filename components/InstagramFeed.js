import { Header } from '../components/Header'
import img from '../public/images/fond_dégradé_long.png'
import style from '../styles/instagramFeed.module.css'

export default function InstagramFeed({ instagramPosts }) {
  return (
    <div>
      <Header></Header>
      <div className={style.instaFeedContainer}>
        {instagramPosts.map(({ node }, i) => {
          return (
            <div className={style.containerInstaPix} key={i}>
              <a
                target='_blank'
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label='view image on Instagram'
              >
                <div className={style.instaPicture}>
                  <img
                    src={node.display_resources[0].src}
                    alt={
                      // the caption with hashtags removed
                      node.edge_media_to_caption.edges[0].node.text
                        .replace(/(#\w+)+/g, '')
                        .trim()
                    }
                  />
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
