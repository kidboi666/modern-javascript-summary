// <-- 전위형과 후위형 -->
// 아래 코드가 실행된 후, a,b,c,d엔 각각 어떤 값들이 저장될까요?
let a = 1; // 2
let b = 1; // 2
let c = ++a; // 2, 전위형은 증가 후의 값을 반환합니다.
let d = b++; // 1, 후위형은 증가 전의 값을 반환합니다.


// <-- 할당 후 결과 예측하기 -->
// 아래 코드가 실행되고 난 후, a와 x엔 각각 어떤 값이 저장될까요?
let a = 2; // 4 (기존 값(2)에 2를 곱한 4)
let x = 1 + (a *= 2); // 5 (1+4의 결과)


// <-- 형 변환 -->
// 아래 표현식들의 결과를 예측해 보세요.
"" + 1 + 0 // "10"
"" - 1 + 0 // 1  ---
true + false // true
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -4
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // ??????


// <-- 덧셈 고치기 -->
// 아래 코드는 사용자에게 숫자 2개를 입력받은 다음 그 합을 보여줍니다.
// 그런데 의도한 대로 예시가 동작하지 않습니다. 프롬프트 창에 세팅한 기본값을 수정하지 않은 경우 덧셈의 결과는 12가 됩니다.
// 왜 그럴까요? 예시가 제대로 동작하도록 코드를 수정해 보세요. 결과는 3이 되어야 합니다.

let a = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(a + b); // 12

or

let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(Number(a) + Number(b)); // 12