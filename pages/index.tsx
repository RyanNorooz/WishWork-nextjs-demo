import React from 'react'
import { Typography, Link as MaterialLink } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

import landingPagePhoto from '/public/images/landing-page-photo.png'
import ellipseStar from '/public/images/ellipse-star.png'
import hand1 from '/public/images/hand1.png'
import hand2 from '/public/images/hand2.png'

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <MaterialLink href="#">about me</MaterialLink>
          <MaterialLink href="#">collections</MaterialLink>
          <Link href="/dashboard" passHref>
            <MaterialLink>executive works</MaterialLink>
          </Link>
        </nav>
      </header>

      <main>
        <section>
          <Typography variant="h2">
            in <span style={{ color: 'red' }}>front</span> of the world
          </Typography>

          <div>
            <Image src={ellipseStar} alt="ellipse star" />

            <Typography variant="body1" style={{ width: 'clamp(5ch, 80ch, 350px)' }}>
              "Wash up the eyes….see the otherwise" we have to observe from a new point of view, for
              instance, the FRONT. Observance, not, perhaps scrutiny is of importance. The story of
              our product has been uttered by the great Sohrab Sepehri. Shall this be our legacy?!
              The FRONT collection is inspired by a poem- the footsteps of water- by a great Persian
              poet, Sohrab Sepehri.
            </Typography>
          </div>

          <Image
            src={landingPagePhoto}
            alt="inspirational stuff"
            style={{ width: '100%', borderRadius: '70% 30% 70% 30% / 70% 30% 70% 30% ' }}
          />
        </section>

        <section>
          <Image src={hand1} alt="hand1" />
          <Image src={hand2} alt="hand2" />
        </section>
      </main>
    </div>
  )
}
