---
title: "delete expression"
source_path: "cpp/language/delete"
category: "language"
---

Destroys object(s) previously allocated by the [new-expression](/cpp/language/new/) and releases obtained memory area.

## Notes
A pointer to void cannot be deleted because it is not a pointer to an object type.

Because a pair of brackets following the keyword delete is always interpreted as the array form of a delete-expression, a [lambda-expression](/cpp/language/lambda/) with an empty capture list immediately after delete must be enclosed in parentheses.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 288 | C++98 | for the first form, the static type of theoperand was compared with its dynamic type | compare the static type of the objectto be deleted with its dynamic type |
| CWG 353 | C++98 | whether the deallocation function will be invoked ifthe destructor throws an exception was unspecified | always invoked |
| CWG 599 | C++98 | the first form could take a null pointer ofany type, including function pointers | except pointers to object types,all other pointer types are rejected |
| CWG 1642 | C++98 | expression could be a pointer lvalue | not allowed |
| CWG 2474 | C++98 | deleting a pointer to an object of a similar butdifferent type resulted in undefined behavior | made well-defined |
| CWG 2624 | C++98 | pointers obtained from non-allocatingoperator new[] could be passed to delete[] | prohibited |
| CWG 2758 | C++98 | it was unclear how access control was done forthe deallocation function and the destructor | made clear |

## See also
- [new](/cpp/language/new/)
