// モジュール化
// グローバル空間にある変数との重複を防ぐ
export {};

let name = 'TypeScript';

// 型注釈（アノテーション）
// let 再代入可能
let isFinished: boolean = true;
isFinished = false;
isFinished = 1;
console.log({ isFinished });