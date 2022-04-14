//Reactのコンポーネント専用のファイルを拡張子jsxで記述するとReact使ってることが分かりやすい

import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //　↓1つ目がstjavascriptの要素の中に直接オブジェクトとしてcssを充てるか　変数を宣言して、コンポーネントないで呼出すか　cssのファイルをインポートするかateの変数名、2つ目がstateを更新する関数名
  const [num, setNum] = useState(0);
  //{}
  //<ColorfulMessage>でコンポーネントタグ指定して、その中にpropsとして渡すものを書く
  return (
    <>
      <h1 style={{ color: `red` }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <p>(^^♪</p>
    </>
  );
};

//Appを他でも使用する
export default App;
