import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="App">
     <footer>
    <div class="wrapper">
      <small>&copy;2022 <strong>Ababu Alemu</strong>, All Rights Reserved</small>
      <nav class="footer-nav">
        <a href="https://github.com/ababuu" target='_blank'><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ababu-alemu-17091519b/" target='_blank'><LinkedInIcon/></a>
      </nav>
    </div>
  </footer>
    </div>
  );
}

export default Footer;
