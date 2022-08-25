export const WorkGenre = (props: any) => {
  const txt = props.skill;
  return txt == "html(pug)" ? (
    // html
    <li className='text-white px-1 bg-red-500'>{txt}</li>
  ) : txt == "css(scss)" ? (
    // css
    <li className='text-white px-1 bg-sky-600'>{txt}</li>
  ) : txt == "react(next)" ? (
    // react
    <li className='text-white bg-cyan-600 px-1'>{txt}</li>
  ) : txt == "styled-components" ? (
    // styled-components
    <li className='text-white px-1 bg-pink-500'>{txt}</li>
  ) : txt == "wordpress(php)" ? (
    // wordpress(php)
    <li className='text-white px-1 bg-indigo-600'>{txt}</li>
  ) : txt == "javascript" ? (
    // javascript
    <li className='text-white px-1 bg-yellow-400'>{txt}</li>
  ) : (
    //設定なし
    <li></li>
  );
};
