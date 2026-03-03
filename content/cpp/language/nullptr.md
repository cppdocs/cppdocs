---
title: "nullptr, the pointer literal (since C++11)"
source_path: "cpp/language/nullptr"
category: "language"
since: "C++11"
---

[1 Syntax](#Syntax)

## Example
```cpp
#include <cstddef>
#include <iostream>
 
template<class T>
constexpr T clone(const T& t)
{
    return t;
}
 
void g(int*)
{
    std::cout << "Function g called\n";
}
 
int main()
{
    g(nullptr);        // Fine
    g(NULL);           // Fine
    g(0);              // Fine
 
    g(clone(nullptr)); // Fine
//  g(clone(NULL));    // ERROR: non-literal zero cannot be a null pointer constant
//  g(clone(0));       // ERROR: non-literal zero cannot be a null pointer constant
}
```

## See also
- [NULL](/cpp/types/null/)
- [nullptr_t](/cpp/types/nullptr_t/)
- [C documentation](/c/language/nullptr/)
