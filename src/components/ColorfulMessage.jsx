import React from "react";

const ColofulMessage = (props) => {
  //propsへの分割代入
  const { color, children } = props;
  const contentStyle = {
    //colorに対してcolorという変数を割り当てる場合は、省略できる
    color,
    fontSize: "18px"
  };
  //propsは特定の名称で渡すこともできる。タグで囲った中身をprops.childrenとして取得することもできる
  return <p style={contentStyle}>{children}</p>;
};
export default ColofulMessage;
