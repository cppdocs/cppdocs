---
title: "std::experimental::source_location::column"
source_path: "cpp/experimental/source_location/column"
category: "experimental"
---

Returns an implementation-defined value representing some offset from the start of the line represented by this object (i.e., the column number).

## Declarations
```cpp
constexpr std::uint_least32_t column() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
An implementation-defined value representing some offset from the start of the line represented by this object (i.e., the column number).

## Example
```cpp
#include <experimental/source_location>
#include <iostream>
 
template<typename T = std::experimental::source_location>
inline void pos(const T& location = T::current())
{
    std::cout
        << "("
        << location.line()
        << ':' 
        << location.column()
        << ") ";
}
 
int main()
{
    pos(); std::cout << "Proxima\n";
    pos(); std::cout << "Centauri\n";
}
```

## See also
- [line](/cpp/experimental/source_location/line/)
- [file_name](/cpp/experimental/source_location/file_name/)
- [function_name](/cpp/experimental/source_location/function_name/)
- [C++ documentation](/cpp/preprocessor/line/)
