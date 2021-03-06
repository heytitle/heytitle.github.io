/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Location } from '@reach/router'

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

import "./layout.css"
import OutLink from "./outlink";
import { Link } from "gatsby"
import SocialIcons from "./social-buttons";
import ApplauseButton from "../components/applause-button";

import "typeface-noto-sans";
import "typeface-kanit";


const Separator = () => {
  return <span style={{fontSize: "1em", margin: "0 0.5em"}}>{` ❖ `}</span>
}


const HeaderLink = ({children, to, location}) => {
  const path = location.pathname

  return <Link css={{
    color: "black",
    padding: "0px 5px",
    textDecoration: (path.match(to) && to !== "/") || (path === to) ? "underlined" : "none"
  }} to={to}>{children}</Link>
}

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          paddingTop: 0,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000
        }}
      >
        <div css={{
          width: "100%", textAlign: "center", padding: "20px 0 20px 0",
          top: "0px", left: "0px",
          margin: `0 auto`,
          maxWidth: 960,
          background: "white",
          [media(DESKTOP_MIN_WIDTH)]: {
            textAlign: "right"
          }
          }}>
          <Location>
            {({ location }) => {
              return <>
                <HeaderLink location={location} to="/">Home</HeaderLink>
                <HeaderLink location={location} to="/publications">Publications</HeaderLink>
                <HeaderLink location={location} to="/projects">Projects</HeaderLink>
                <HeaderLink location={location} to="/blog">Blog</HeaderLink>
                <HeaderLink location={location} to="/about">About</HeaderLink>
              </>
            }}

          </Location>
        </div>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0,
          position: "relative"
        }}
      >
        <main css={{
          padding: "0px 20px",
          marginTop: "80px",
          [media(DESKTOP_MIN_WIDTH)]: {
            marginTop: "100px",
            padding: "0px"
          }

        }}>{children}</main>
        <footer css={{textAlign: "center", margin: "20px 0", padding: "20px 0"}}>
          Pattarawat Chormai
          <SocialIcons/>
          <div style={{marginBottom: "20px"}}>
            There are <ApplauseButton/> for the website.
          </div>
          <div style={{fontSize: "0.8em", padding: "10px"}}>
            © {new Date().getFullYear()}
            <Separator/>
             Built with {` `}
            <OutLink href="https://www.gatsbyjs.org">Gatsby</OutLink>{` & `}
            <OutLink href="https://reactjs.org">React</OutLink>
            <Separator/>
            Typeface with <OutLink href="https://fonts.google.com/specimen/Noto+Sans">Noto Sans</OutLink> and <OutLink href="https://fonts.google.com/specimen/Kanit">Kanit</OutLink>
            <Separator/>
            Applause Service by <OutLink href="https://applause-button.com">Applause Button</OutLink>
            <Separator/>
            <OutLink href="https://webring.wonderful.software#pat.chormai.org" title="Webring">
              Webring
              {` `}
              <img
                alt="Webring"
                width="12px"
                height="12px"
                src="https://webring.wonderful.software/webring.black.svg"
              />
            </OutLink>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
