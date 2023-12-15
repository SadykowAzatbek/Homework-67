import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {add, clean} from '../../passwordSlice';

const ScreenPassword = () => {
  const passwordValue = useSelector((state: RootState) => state.password.value);
  const dispatch = useDispatch();

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [hiddenPassword, setHiddenPassword] = useState("");

  const numberBtn = [];

  for (let i = 0; i < 10; i++) {
    numberBtn.push(
      <button className="btn btn-light" key={Math.random()} onClick={() => {
        if (passwordValue.length < 4) {
          dispatch(add([i].toString()));
          setHiddenPassword(hiddenPassword + "*");
        }
      }}>{i}</button>
    )
  }

  const enterBtn = () => {
    if (passwordValue === '2835') {
      setBackgroundColor("#2bea0e");
      setHiddenPassword("Access Granted");
    } else {
      setBackgroundColor("#e50101");
      setHiddenPassword("Access Denied");
    }
  };

  return (
    <>
      <div className="main-block border border-dark rounded-3 p-2">
        <div className="pt-3 pb-3 border border-dark" style={{ background: backgroundColor }}>
          {hiddenPassword}
        </div>
        <div className="d-flex flex-wrap gap-2">
          {numberBtn}
          <button className="btn btn-light" onClick={() => {
            dispatch(clean());
            setHiddenPassword(hiddenPassword.slice(0, -1));
          }}>C</button>
          <button className="btn btn-light" onClick={enterBtn}>E</button>
        </div>
      </div>
    </>
  );
};

export default ScreenPassword;
