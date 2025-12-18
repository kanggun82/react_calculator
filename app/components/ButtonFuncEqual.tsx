'use client';

type Props = {
  result: string;
  history: string;
  setHistory: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

export default function ButtonFuncEqual({
  result,
  history,
  setHistory,
  setResult
} : Props) {
  
  function handleClick() {
     let calStr = history.trim().replace(/\s+/g, '') + result;
     calStr = calStr.trim().replace(/x/g, '*');
     calStr = calStr.trim().replace(/÷/g, '/');

     console.log(calStr);
     try{
      setResult(prev => String(eval(calStr)));
     }catch(e){}
     
  }
  
  let thisClassName = 'key key--eq';

  return (
    <button className={thisClassName} type="button" onClick={handleClick}>=</button>
  );
}
