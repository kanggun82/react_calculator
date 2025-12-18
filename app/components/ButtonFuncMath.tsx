'use client';

type Props = {
  mathType: string;
  result: string;
  history: string;
  setHistory: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

export default function ButtonFuncMath({
  mathType,
  result,
  history,
  setHistory,
  setResult
} : Props) {
  
  function handleClick() {
    if(result.length == 0){return;}
    setHistory(preV => preV + ' ' + result + ' ' + mathType);
    setResult('');
  }
  
  let thisClassName = 'key key--op';

  return (
    <button className={thisClassName} type="button" onClick={handleClick}>{mathType}</button>
  );
}
