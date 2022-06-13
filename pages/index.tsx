import React from 'react'
import styled from '@emotion/styled'
import { Typography, Link as MaterialLink } from '@mui/material'
import Box from '@mui/system/Box'
import Image from 'next/image'
import Link from 'next/link'

import landingPagePhoto from '/public/images/landing-page-photo.png'
import ellipseStar from '/public/images/ellipse-star.png'
import hand1 from '/public/images/hand1.png'
import hand2 from '/public/images/hand2.png'

const Header = styled.header`
  direction: ltr;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
    width: 100%;
    padding: 0.8rem 0;
    text-align: center;
    border: solid 1px black;
    border-width: 0 1px 1px; // omit top border
  }

  a:first-of-type {
    border-left: none;
  }
  a:last-of-type {
    border-right: none;
  }

  @media (min-width: 768px) {
    nav {
      justify-content: initial;
    }
    a {
      padding: 1em 1.5em;
      width: fit-content;
    }
  }
`

const Main = styled.main`
  section:first-of-type {
    position: relative;
    padding: 4rem 2rem;

    .main-title {
      color: #b39880;
      font-family: 'Marcellus';
    }

    .landing-page-photo {
      position: absolute;
      left: clamp(-30px, -10vw, 1000px);
      transform: translateY(-4rem);
      @media (min-width: 768px) {
        transform: translateY(-11rem);
      }
    }
  }

  // TODO: improve in future
  .tilted-line-section-divider {
    height: 0;
    border-left: 100vw solid transparent;
    border-bottom: 300px solid #fff;
    @media (min-width: 544px) {
      padding: 200px 0 0;
      border-bottom: 200px solid #fff;
    }
    @media (min-width: 700px) {
      padding: 200px 0 0;
      border-bottom: 350px solid #fff;
    }
    @media (min-width: 790px) {
      padding: 200px 0 0;
      border-bottom: 300px solid #fff;
    }
    @media (min-width: 920px) {
      padding: 200px 0 0;
      border-bottom: 500px solid #fff;
    }
    @media (min-width: 1000px) {
      padding: 200px 0 0;
      border-bottom: 600px solid #fff;
    }
  }

  section:last-of-type {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100vh;

    .img1 {
      transform: translateY(0%);
    }
    .img2 {
      transform: translateY(-10%);
    }

    &:before {
      content: 'BRACELET COLLECTION';
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      writing-mode: vertical-rl;
      text-orientation: mixed;
      color: #faf9f9;
      font-size: 25rem;
      line-height: 0.6;
      height: 3em;
      overflow: hidden;
    }
  }

  @media (min-width: 768px) {
    section:first-of-type {
      padding: 6rem;

      .subtitle-section {
        padding-right: 7rem;
      }
    }

    section:last-of-type {
      justify-content: flex-end;
      .img1 {
        transform: translateY(0%);
        margin-left: -2rem;
      }
      .img2 {
        transform: translateY(50%);
        margin-left: 7rem;
      }

      &:before {
        position: absolute;
        right: 0.6em;
        justify-content: flex-end;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        color: #faf9f9;
        font-size: 25rem;
        font-family: 'Marcellus';
      }
    }
  }
`

export default function Home() {
  return (
    <div dir="ltr" style={{ background: '#faf9f9' }}>
      <Header>
        <nav>
          <MaterialLink href="#">ABOUT ME</MaterialLink>
          <MaterialLink style={{ background: '#f3c6ad' }} href="#">
            COLLECTIONS
          </MaterialLink>
          <Link href="/dashboard" passHref>
            <MaterialLink>EXECUTIVE WORKS</MaterialLink>
          </Link>
        </nav>
      </Header>

      <Main>
        <section style={{ zIndex: 0 }}>
          <Typography variant="h2" className="main-title">
            IN <span style={{ color: 'black' }}> FRONT </span> OF THE WORLD
          </Typography>

          <div style={{ display: 'flex', gap: '2rem', zIndex: 1 }} className="subtitle-section">
            <Box sx={{ width: '9rem' }}>
              <Image src={ellipseStar} alt="ellipse star" />
            </Box>

            <Typography
              variant="body1"
              style={{ width: 'clamp(5ch, 55ch, 600px)', fontFamily: 'jost', fontSize: '1.2rem' }}
            >
              "wash up the eyes….see the otherwise" we have to observe from a new point of view, for
              instance, the front. observance, not, perhaps scrutiny is of importance. the story of
              our product has been uttered by the great sohrab sepehri. shall this be our legacy?!
              the front collection is inspired by a poem- the footsteps of water- by a great persian
              poet, sohrab sepehri.
            </Typography>
          </div>

          <Box className="landing-page-photo" style={{ zIndex: -1 }}>
            <Image
              src={landingPagePhoto}
              alt="inspirational stuff"
              width={1100}
              height={900}
              style={{ width: '100%', borderRadius: '71% 29% 83% 17% / 75% 23% 77% 25%' }}
            />
          </Box>
        </section>

        <div className="tilted-line-section-divider" />

        <section>
          <Box className="img1">
            <Image src={hand1} alt="hand1" />
          </Box>
          <Box className="img2">
            <Image src={hand2} alt="hand2" />
          </Box>
        </section>
      </Main>
    </div>
  )
}
