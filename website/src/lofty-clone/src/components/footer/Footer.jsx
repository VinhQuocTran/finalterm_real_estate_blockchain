import "./footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <div className="footer">
      <ContentWrapper>
        <div className="logo">
          <img src="https://www.lofty.ai/static/media/logo-light.ff9fcbf0916e664961e966b23ce0dcc5.svg?__cf_chl_tk=Ikxz1stAGrjbZdu6FcAGd13.pCoDP1rb67ddLlwlSD8-1701791342-0-gaNycGzNEyU" alt="" />
        </div>
        <div className="navItems">
          <span className="navItem">About us</span>
          <span className="navItem">Reviews</span>
          <span className="navItem">Compare Lofty</span>
          <span className="navItem">Learn</span>
          <span className="navItem">Blog</span>
          <span className="navItem">List property</span>
          <span className="navItem">Privacy policy</span>
          <span className="navItem">Term of service</span>
          <span className="navItem">Contact us</span>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Footer