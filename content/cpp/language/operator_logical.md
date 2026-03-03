---
title: "Logical operators"
source_path: "cpp/language/operator"
category: "language"
---

Returns the result of a boolean operation.

## Declarations
```cpp
bool operator!(bool)
```

```cpp
bool operator&&(bool, bool)
```

```cpp
bool operator||(bool, bool)
```

## Example
```cpp
#include <iostream>
#include <sstream>
#include <string>
 
int main()
{
    int n = 2;
    int* p = &n;
    // pointers are convertible to bool
    if (    p && *p == 2  // "*p" is safe to use after "p &&"
        || !p &&  n != 2) // || has lower precedence than &&
        std::cout << "true\n";
 
    // streams are also convertible to bool
    std::stringstream cin;
    cin << "3...\n" << "2...\n" << "1...\n" << "quit";
    std::cout << "Enter 'quit' to quit.\n";
    for (std::string line;    std::cout << "> "
                           && std::getline(cin, line)
                           && line != "quit";)
        std::cout << line << '\n';
}
```

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [logical_and](/cpp/utility/functional/logical_and/)
- [logical_or](/cpp/utility/functional/logical_or/)
- [logical_not](/cpp/utility/functional/logical_not/)
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
- [C documentation](/c/language/operator_logical/)
