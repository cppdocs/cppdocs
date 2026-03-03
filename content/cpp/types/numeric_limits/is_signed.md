---
title: "std::numeric_limits<T>::is_signed"
source_path: "cpp/types/numeric_limits/is_signed"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_signed is true for all signed arithmetic types T and false for the unsigned types. This constant is meaningful for all specializations.

## Declarations
```cpp
static const bool is_signed;
```
_(until C++11)_

```cpp
static constexpr bool is_signed;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <iomanip>
#include <limits>
 
template<typename T>
struct test
{
    test(const char* name, int w = 15)
    {
        std::cout
            << std::left << std::setw(w)
            << (std::numeric_limits<T>::is_specialized ? name : "non-specialized")
            << " : "
            << (std::numeric_limits<T>::is_signed ? "" : "un") << "signed\n";
    }
};
 
int main()
{
    test<bool>{"bool"};
    test<char>{"char"};
    test<wchar_t>{"wchar_t"};
    test<char16_t>{"char16_t"};
    test<char32_t>{"char32_t"};
    test<float>{"float"};
    struct delusion{};
    test<delusion>{"delusion"};
    test<decltype(42)>{"decltype(42)"};
}
```

## See also
- [is_signed](/cpp/types/is_signed/)
- [is_integer](/cpp/types/numeric_limits/is_integer/)
- [is_exact](/cpp/types/numeric_limits/is_exact/)
- [is_bounded](/cpp/types/numeric_limits/is_bounded/)
