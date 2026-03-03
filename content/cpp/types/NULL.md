---
title: "NULL"
source_path: "cpp/types/NULL"
header: "<clocale>"
category: "types"
---

The macro NULL is an implementation-defined [null pointer constant](/cpp/language/pointer/#Null_pointers).

## Declarations
```cpp
#define NULL /* implementation-defined */
```

## Notes
In C, the macro NULL may have the type void*, but that is not allowed in C++ because null pointer constants cannot have that type.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <type_traits>
#include <typeinfo>
 
class S;
 
int main()
{
    int* p = NULL;
    int* p2 = static_cast<std::nullptr_t>(NULL);
    void(*f)(int) = NULL;
    int S::*mp = NULL;
    void(S::*mfp)(int) = NULL;
    auto nullvar = NULL; // may trigger a warning when compiling with gcc/clang
 
    std::cout << "The type of nullvar is " << typeid(nullvar).name() << '\n';
 
    if constexpr(std::is_same_v<decltype(NULL), std::nullptr_t>)
        std::cout << "NULL implemented with type std::nullptr_t\n";
    else
        std::cout << "NULL implemented using an integral type\n";
 
    [](...){}(p, p2, f, mp, mfp); // < suppresses "unused variable" warnings
}
```

## See also
- [nullptr](/cpp/language/nullptr/)
- [nullptr_t](/cpp/types/nullptr_t/)
- [nullptr](/cpp/language/nullptr/)
- [C documentation](/c/types/NULL/)
