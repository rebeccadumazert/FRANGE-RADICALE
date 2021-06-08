import img from '../public/images/fond_dégradé_long.png'
import img1 from '../public/images/photo1.jpg'
import img2 from '../public/images/photo2.jpg'
import img3 from '../public/images/photo3.jpg'
import img4 from '../public/images/photo4.jpg'
import img5 from '../public/images/photo5.jpg'
import img6 from '../public/images/photo6.jpg'
import img7 from '../public/images/photo7.jpg'
import img8 from '../public/images/photo8.jpg'
import img9 from '../public/images/photo9.jpg'
import style from '../styles/instagramFeed.module.css'

export default function InstagramFeed() {
  const arrayPicture = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  return (
    <div>
      <div className={style.instaFeedContainer}>
        {arrayPicture.map((pic, i) => {
          console.log(pic)
          return (
            <div className={style.containerInstaPix} key={i}>
              <a
                target='_blank'
                href={`https://www.instagram.com/frangeradicale/`}
                key={i}
                aria-label='view image on Instagram'
              >
                <div className={style.instaPicture}>
                  <img src={pic} alt='' />
                </div>
              </a>
            </div>
          )
        })}
      </div>
      {/* <div className={style.instaFeedContainer}>
        {instagramPosts.map(({ node }, i) => {
          console.log(node.shortcode, 'wsh')
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
      </div> */}
    </div>
  )
}
