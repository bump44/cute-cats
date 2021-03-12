import React from 'react';
import cx from 'classnames';
import './App.css';

function App() {
  const [switched, setSwithed] = React.useState(false);
  const toggle = React.useCallback(() => setSwithed(!switched), [switched]);

  return (
    <React.Fragment>
      <div className="app">
        <div className="actions">
          <button onClick={toggle}>Переключить вид</button>
        </div>

        <div
          className={cx('row', {
            reverse: switched,
          })}
        >
          <div className="col">
            <iframe
              title="Котики"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sn-S82mF_gw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col">
            <img
              src="https://klike.net/uploads/posts/2018-10/1539499416_1.jpg"
              alt="Котик"
              className="image"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
