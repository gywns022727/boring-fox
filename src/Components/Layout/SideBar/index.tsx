import React from 'react'
import { PcContainer, MobileContainer, ImgArticle } from './style'
import Copy from '../../../assets/images/copy.png';
import Git from '../../../assets/images/git.png';
import Person from '../../../assets/images/person.png';
import { elastic as Menu } from 'react-burger-menu'
import './style.css';
import clipboardCopy from 'clipboard-copy';
import swal from 'sweetalert';

export default function index() {
  const Clipboard = () => {
    const currentUrl = window.location.href;
    clipboardCopy(currentUrl)
      .then(() => {
        swal("Success!", "Copied to clipboard", "success");
      });
  };

  const Visitant = () => {
    swal("현재 누적 방문자 수는", "0000명입니다.");
  }

  return (
    <div>
      <PcContainer>
        <div>
          <img src={Copy} alt="linkCopyIcon" onClick={Clipboard} />
        </div>
        <div>
          <a href="https://github.com/gywns022727/boring-fox" target='_blank'>
            <img src={Git} alt="GithubLinkIcon" />
          </a>
        </div>
        <div>
          <img src={Person} alt="VistorCountIcon" onClick={Visitant} />
        </div>
      </PcContainer>
      <MobileContainer id="outer-container">
        <Menu width={"150px"} pageWrapId={"elastic"}>
          <ImgArticle>
            <img src={Copy} alt="linkCopyIcon" onClick={Clipboard} />
          </ImgArticle>
          <ImgArticle>
            <a href="https://github.com/gywns022727/boring-fox" target='_blank'>
              <img src={Git} alt="GithubLinkIcon" />
            </a>
          </ImgArticle>
          <ImgArticle>
            <img src={Person} alt="VistorCountIcon" onClick={Visitant} />
          </ImgArticle>
        </Menu>
        <div id="elastic" ></div>
      </MobileContainer>
    </div >
  )
}

