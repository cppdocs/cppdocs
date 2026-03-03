---
title: "Function template"
source_path: "cpp/language/function_template"
category: "language"
---

A function template defines a family of functions.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 214 | C++98 | the exact procedure of partial ordering was not specified | specification added |
| CWG 532 | C++98 | the order between a non-static member function templateand a non-member function template was not specified | specification added |
| CWG 581 | C++98 | template argument list in an explicit specialization orinstantiation of a constructor template was allowed | forbidden |
| CWG 1321 | C++98 | it was unclear whether same dependent names in thefirst declaration and a redeclaration are equivalent | they are equivalent andthe meaning is same asin the first declaration |
| CWG 1395 | C++11 | deduction failed when A was from a pack,and there was no empty pack tie-breaker | deduction allowed,tie-breaker added |
| CWG 1406 | C++11 | the type of the new first parameter added fora non-static member function template wasnot relevant to the ref-qualifier of that template | the type is an rvaluereference type if theref-qualifier is && |
| CWG 1446 | C++11 | the type of the new first parameter added for a non-static memberfunction template without ref-qualifier was an lvalue referencetype, even if that member function template is compared with afunction template whose first parameter has rvalue reference type | the type is anrvalue referencetype in this case |
| CWG 2373 | C++98 | new first parameters were added to the parameter listsof static member function templates in partial ordering | not added |

## See also
- [class template](/cpp/language/class_template/)
- [function declaration](/cpp/language/function/)
