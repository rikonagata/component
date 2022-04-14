//Reactのコンポーネント専用のファイルを拡張子jsxで記述するとReact使ってることが分かりやすい

import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  //{}javascriptの要素の中に直接オブジェクトとしてcssを充てるか　変数を宣言して、コンポーネントないで呼出すか　cssのファイルをインポートするか
  //<ColorfulMessage>でコンポーネントタグ指定して、その中にpropsとして渡すものを書く
  return (
    <>
      <h1 style={{ color: `red` }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//Appを他でも使用する
export default App;
