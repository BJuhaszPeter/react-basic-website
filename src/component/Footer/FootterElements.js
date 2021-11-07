import React from 'react';
import classes from './FooterElements.module.css';
import { Link as LinkR } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import {footerLinks, socialLinks} from './Data'

const FotterElements = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

const renderfooterLinks=(links)=>{
   let fLinks = null;
    if (links && links.length>0) {
      
      fLinks = links.map((e, idx) => { return  <LinkR key={e.label} className={classes.FooterLink} to={e.root}>{e.label}</LinkR>; });
    }
    return fLinks;

  }

  const renderfooterLinksSection=()=>{
   let footerLinksSection = null;
    if (footerLinks) {
      footerLinksSection = footerLinks.map((e, idx) => { 
        return <div key={e.title} className={classes.FooterLinkItems}>
                  <h1 className={classes.FooterLinkTitle}>{e.title}</h1>
                  {renderfooterLinks(e.links)}
               </div>; });
    }
    return footerLinksSection;

  }

  const renderSocaialMediaLinks=()=>{
   let socaialMediaLinksSection = null;
    if (socialLinks) {
      
      socaialMediaLinksSection = socialLinks.map((e, idx) => { return <a className={classes.SocialMediaLink} href={e.root} rel="noreferrer" target='_blank' aria-label={e.label} key={e.label}>{e.icon}</a>; });
    }
    return socaialMediaLinksSection;

  }

  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterWrapper}>
        <div className={classes.FooterLinksContainer}>
          <div className={classes.FooterLinksWrapper}>
            {renderfooterLinksSection()}
          </div>
        </div>
        <section className={classes.SocialMedia}>
          <div className={classes.SocialMediaWrapper}>
            <LinkR onClick={toggleHome} className={classes.SocialMediaLogo} to='/'>dolla</LinkR>
            <small className={classes.WebsiteRights}>dolla © {new Date().getFullYear()}</small>
            <div className={classes.SocialMediaIcons}>
              {renderSocaialMediaLinks()}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FotterElements;
