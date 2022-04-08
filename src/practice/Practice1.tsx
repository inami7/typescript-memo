//num: number　とすることで数値以外がわたってきたときエラーが出るようになる
//　　　　　　　　ない場合文字列がわたってきた場合でもエラーがでないのでわかりにくい
export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  );
};
