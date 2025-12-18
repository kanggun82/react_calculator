'use client';

type Props = {
  number: number;
  result: string;
  history: string;
  setHistory: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

export default function ButtonNumber({
  number,
  result,
  history,
  setHistory,
  setResult,
}: Props) {
  
  function handleClick() {
    setResult(prev => prev + String(number));
  }
  
  let thisClassName = number == 0 ? 'key key--wide' : 'key'

  return (
    <button className={thisClassName} type="button" onClick={handleClick}>{number}</button>
  );
}
