import Head from 'next/head'
import Instagram from 'instagram-web-api'
import InstagramFeed from '../components/InstagramFeed'
import img from '../public/images/fond_dégradé_long.png'

function Galerie({ instagramPosts }) {
  const instaSliced = instagramPosts.slice(0, 9)
  return (
    <>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <InstagramFeed instagramPosts={instaSliced} />
    </>
  )
}
export default Galerie

const globalStyle = `
body {
    background-image: url(${img})
}
`

export async function getStaticProps(context) {
  const client = new Instagram({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD,
  })

  let posts = []

  try {
    await client.login()
    const instagram = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME,
    })
    if (instagram['user']['edge_owner_to_timeline_media']['count'] > 0) {
      posts = instagram['user']['edge_owner_to_timeline_media']['edges']
    }
  } catch (err) {
    console.log('wrong wrong', err)
  }
  return {
    props: {
      instagramPosts: posts,
    },
  }
}
