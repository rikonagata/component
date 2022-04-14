//Reactのコンポーネント専用のファイルを拡張子jsxで記述するとReact使ってることが分かりやすい
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //　↓1つ目がstjavascriptの要素の中に直接オブジェクトとしてcssを充てるか　変数を宣言して、コンポーネントないで呼出すか　cssのファイルをインポートするかateの変数名、2つ目がstateを更新する関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  //{}
  //<ColorfulMessage>でコンポーネントタグ指定して、その中にpropsとして渡すものを書く
  return (
    <>
      <h1 style={{ color: `red` }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </>
  );
};

//Appを他でも使用する
export default App;
