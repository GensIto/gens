import React, { useState, useEffect } from "react";

export default function ScrollAnimation({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // スクロールを感知しクラスをつける関数
  const AnimationSwitch = () => {
    const target = document.getElementsByClassName("jsScroll");
    //Classを追加する位置を指定（ビューポート内）
    const position = Math.floor(window.innerHeight * 0.9); //左記はビューポート内の上から90%の位置を指定

    //要素の数だけループする
    for (let i = 0; i < target.length; i++) {
      //要素の上部座標を取得する（小数点切り捨て）
      const offsetTop = Math.floor(target[i].getBoundingClientRect().top);

      //要素の上部座標がpositionの位置を通過したら
      if (offsetTop < position) {
        //要素にClassを追加する
        target[i].classList.add("jsActive");
      }
    }
  };

  // useEffectは第一引数に副作用第二引数に副作用が起こる元の処理を書く
  // 今回はwindowに一度だけ登録したいので空文字[]を書く
  // 分かりやすく噛み砕くと 第二引数をしたら第一引数をする
  // もし第二引数を書かなければ無限ループの可能性が高まる
  useEffect(
    () => {
      //スクロールイベントリスナーに登録
      window.addEventListener("scroll", AnimationSwitch, false);
      window.addEventListener("scroll", handleScroll);
    },
    [
      /**初回のみ登録ここの概念は難しい */
    ]
  );

  return <div className='jsScroll'>{children}</div>;
}
