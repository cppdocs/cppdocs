---
title: "std::nullptr_t"
source_path: "cpp/types/nullptr_t"
header: "<cstddef>"
category: "types"
since: "C++11"
---

std::nullptr_t is the type of the null pointer literal nullptr. It is a distinct type that is not itself a pointer type or a pointer to member type. Prvalues of this type are [null pointer constants](/cpp/language/pointer/#Null_pointers), and may be [implicitly converted](/cpp/language/implicit_cast/) to any pointer and pointer to member type.

## Declarations
```cpp
using nullptr_t = decltype(nullptr);
```
_(since C++11)_

## Notes
The C++ standard requires [<stddef.h>](/c/types/) to place the contents of [<cstddef>](/cpp/header/cstddef/) in the global namespace, and thereby requires nullptr_t to be available in the global namespace when [<stddef.h>](/c/types/) is included.

nullptr_t is not a part of C until C23.

It is unspecified whether the declaration of std::nullptr_t is available in any other standard library header. An implementation may avoid introducing this name even when the standard requires std::nullptr_t to be used, by e.g. spelling decltype(nullptr) instead.

## Example
```cpp
#include <cstddef>
#include <iostream>
 
void f(int*)
{
    std::cout << "Pointer to integer overload\n";
}
 
void f(double*)
{
    std::cout << "Pointer to double overload\n";
}
 
void f(std::nullptr_t)
{
    std::cout << "null pointer overload\n";
}
 
int main()
{
    int* pi{};
    double* pd{};
 
    f(pi);
    f(pd);
    f(nullptr); // would be ambiguous without void f(nullptr_t)
    // f(0);    // ambiguous call: all three functions are candidates
    // f(NULL); // ambiguous if NULL is an integral null pointer constant 
                // (as is the case in most implementations)
}
```

## See also
- [nullptr](/cpp/language/nullptr/)
- [NULL](/cpp/types/null/)
- [is_null_pointer](/cpp/types/is_null_pointer/)
- [C documentation](/c/types/nullptr_t/)
