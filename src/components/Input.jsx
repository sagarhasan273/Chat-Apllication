/* eslint-disable jsx-a11y/label-has-associated-control */
import Attach from '../img/attach.png';
import Img from '../img/img.png';

export default function Input() {
    return (
      <div className="input">
        <input type="textarea" placeholder="Type something..." />
        <div className="send">
          <img src={Attach} alt="" />
          <input type="file" name="" id="file" style={{ display: 'none' }} />
          <label htmlFor="file">
            <img src={Img} alt="" />
          </label>
          <button type="button">Send</button>
        </div>
      </div>
    );
}
