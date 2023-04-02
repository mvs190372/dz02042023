import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');
  const [emoji, setEmoji] = useState([]);


  console.log(value);
  console.log(emoji);


  const url = "https://6429c61900dfa3b54739f7f7.mockapi.io/emoji";

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => setEmoji(data))

    return
    //убрать повторение / убить
  }, [])


  return (
    <div className="app">
      <h1>Emoji Finder</h1>
      <p>Find emoji by keywords</p>
      <input type="text" className="inp" onChange={(e) => setValue(e.target.value)} />

      {/*<button>X</button>*/}

      <div className="emodjiContainer">
        {emoji.filter(el => el.keywords.includes(value)).map((elem, index) => (
          <ul className="emj" key={index}>
            <li>{elem.symbol}</li>
            <li>{elem.title}</li>
            <li>{elem.keywords}</li>
          </ul>
        ))}
      </div>

    </div >
  );
}

export default App;

//SPA - single page application
//emoji

//План SPA
//1. накинуть верстку
//2. • получить данные и прокинут их
//3. • поисковик / input 
//4. поисковик работает по введеным значениям (отрисовка карт с эмоджи)
//5. smile || smaile - усложнение
//6.
//7.
//8
//9.
//10.
//*11. пагинация ; пагинация > 5 значит + 1 страница

//удаление папок и git.ignore
