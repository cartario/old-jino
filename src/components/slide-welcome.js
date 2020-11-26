import { createElement } from "../utils";
import {welcomeData} from "../mock";

const {offerTop, offerTitle, textRegister} = welcomeData;

class Slide {
  constructor(){
    this.input = null;
    this.setSubmitForm();
  }
  getTemplate(){
    return (`<li><section class="slide slide--1">
    <div class="container">
      <div class="slide__top">
        <a class="logo" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="15" viewBox="0 0 65 15">
        <path d="M26.708 7.223L28.2 3.125c.087-.315.05-.587-.095-.797-.148-.21-.392-.338-.65-.338h-2.33c-.354 0-.667.24-.763.582l-.92 3.445h-.687V2.78c0-.437-.354-.792-.79-.792h-1.976c-.44 0-.793.354-.793.792v3.235h-.78l-1.243-3.507c-.116-.31-.412-.52-.746-.52h-2.305c-.268 0-.52.136-.664.363-.15.228-.17.512-.06.828l1.843 4.048-1.86 4.698c-.094.242-.06.516.087.732.148.215.392.344.65.344h2.306c.35 0 .655-.228.758-.562l1.043-3.44h.97v3.21c0 .437.353.79.79.79h1.976c.437 0 .79-.354.79-.79V9h.834l.767 3.387c.087.357.404.613.77.613h2.33c.252 0 .49-.12.64-.32.148-.202.193-.463.12-.705l-1.506-4.752zM40.217 2.417c-.004-.008-.012-.017-.018-.024-.024-.045-.058-.09-.095-.132-.008-.007-.013-.02-.02-.028-.046-.045-.095-.083-.15-.12-.01-.007-.02-.012-.036-.02-.046-.024-.09-.045-.14-.062l-.05-.013c-.062-.016-.128-.03-.194-.03h-1.98c-.06 0-.118.01-.177.022-.018.003-.03.012-.046.016-.04.013-.078.025-.115.045l-.056.026c-.03.02-.064.04-.095.066-.02.012-.033.024-.05.037-.028.032-.062.065-.088.098-.01.008-.017.017-.02.025l-3.27 4.613h-.042V2.78c0-.437-.355-.792-.792-.792h-1.975c-.438 0-.792.354-.792.792v9.427c0 .123.03.238.084.342 0 .008 0 .012.004.02s.013.018.017.02c.028.05.058.096.095.137.008.01.017.017.024.028.042.046.09.082.145.115.012.014.023.018.04.024.04.024.09.046.14.058.018.01.03.014.046.018.068.017.13.03.2.03h1.975c.063 0 .12-.01.178-.02.017-.006.033-.015.05-.02.037-.012.078-.023.115-.044l.05-.028c.032-.017.065-.037.1-.062.012-.013.028-.024.045-.04.032-.03.062-.063.086-.097.01-.013.02-.02.024-.024L36.7 8.12h.045v4.087c0 .438.354.793.79.793h1.98c.438 0 .786-.354.786-.793V2.78c0-.124-.027-.24-.076-.342-.003-.008-.003-.016-.007-.02zM51.225 1.99h-1.98c-.437 0-.786.353-.786.79V6h-2.887V2.78c0-.437-.354-.792-.793-.792h-1.973c-.438 0-.794.354-.794.792v9.427c0 .438.355.79.794.79h1.973c.438 0 .793-.353.793-.79V9h2.886v3.207c0 .438.35.79.786.79h1.98c.437 0 .79-.353.79-.79V2.78c0-.437-.354-.79-.79-.79zM11.084 9.994V2.78c0-.437-.354-.792-.792-.792H3.178c-.437 0-.792.354-.792.792L1.2 9.994H.802c-.433 0-.787.354-.787.79v3.425c0 .436.354.79.787.79h1.583c.438 0 .792-.354.792-.79v-1.147h5.537v1.146c0 .436.35.79.787.79h1.583c.437 0 .792-.354.792-.79v-3.425c0-.437-.356-.79-.793-.79zm-3.1.006l-3.417-.008.77-4.977h2.647V10zM59.28 1.79c-3.374 0-5.73 2.36-5.73 5.735 0 3.375 2.356 5.734 5.73 5.734 3.378 0 5.735-2.357 5.735-5.735 0-3.376-2.357-5.734-5.734-5.734zm0 8.192c-1.56 0-2.456-.896-2.456-2.458 0-1.562.895-2.457 2.457-2.457 1.563 0 2.458.895 2.458 2.457 0 1.564-.894 2.458-2.457 2.458z"/>
        </svg>
          <span>домены</span>
        </a>
        <p>${offerTop}</p>
      </div>
      <h1 class="slide__title">${offerTitle}</h1>
    
      <div class="form-wrapper">          
        <form class="welcome-form">
          <input class="welcome-input" type="text" name="domen" placeholder="example.ru"/>
          <div class="form__footer">
            <span class="form__footer-info">Домен ${this.input} - свободен</span>
            <a href="#">${textRegister}</a>
          </div>
          <button class="btn btn--form" type="submit">Проверить</button>
        </form>
        <button class="btn btn--create">Создать аккаунт</button>
      </div>
      <div class="slide__controls">
      </div>
    </div>
  </section></li>`)
  }

  setSubmitForm(){    
    const form = this.getElement().querySelector('form');
    const formFooter = form.querySelector('.form__footer');
    const formInput = form.querySelector('.welcome-input');
    const formFooterInfo = form.querySelector('.form__footer-info');    

    form.addEventListener('submit', (e)=>{      
      e.preventDefault();
      this.input=formInput.value;      
      form.reset();
      formFooter.setAttribute('style', 'display:inline-flex');
      formFooterInfo.textContent = `Домен ${this.input} свободен`;
      const formData = new FormData();
      formData.append('domen', this.input);      
    })
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
};

const component = new Slide();
export default component;
