/* eslint-disable @typescript-eslint/no-unused-vars*/

// TypeScroptの基本の型

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//string 文字
let str: string = "A";

//Array 配列 どっちの書き方でもいい
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//any なんでもいい　できれば使わないほうがいい
let any1: any = false;

//void 関数に使う　returnがない場合に使うが書かなくてもいい
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aaa" };
