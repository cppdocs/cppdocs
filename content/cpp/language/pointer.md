---
title: "Pointer declaration"
source_path: "cpp/language/pointer"
category: "language"
---

Declares a variable of a pointer or pointer-to-member type.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 73 | C++98 | a pointer to an object never compares equalto a pointer to one past the end of an array | for non-null and non-function pointers,compare the addresses they represent |
| CWG 903 | C++98 | any integral constant expression thatevaluates to 0 was a null pointer constant | limited to integerliterals with value 0 |
| CWG 1438 | C++98 | the behavior of using an invalid pointervalue in any way was undefined | behaviors other than indirection andpassing to deallocation functionsare implementation-defined |
| CWG 1512(N3624) | C++98 | the rule of composite pointer type was incomplete, and thusdid not allow comparison between int** and const int** | made complete |
| CWG 2206 | C++98 | a pointer to void and a pointer tofunction had a composite pointer type | they do not have such a type |
| CWG 2381 | C++17 | function pointer conversions were not allowedwhen determining the composite pointer type | allowed |
| CWG 2822 | C++98 | reaching the end of the duration of a regionof storage could invalidate pointer values | pointer validity is basedon the evaluation context |
| CWG 2933 | C++98 | pointers to functions were always invalid | they are always valid |

## See also
- [C documentation](/c/language/pointer/)
