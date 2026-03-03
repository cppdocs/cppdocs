---
title: "std::source_location::column"
source_path: "cpp/utility/source_location/column"
category: "utility"
since: "C++20"
---

Returns an implementation-defined value representing some offset from the start of the line represented by this object (i.e., the column number). Column numbers are presumed to be 1-indexed.

## Declarations
```cpp
constexpr std::uint_least32_t column() const noexcept;
```
_(since C++20)_

## Return value
An implementation-defined value representing some offset from the start of the line represented by this object (i.e., the column number).

## Example
```cpp
#include <iostream>
#include <source_location>
 
template<typename T = std::source_location>
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
//      ↓: column #9
    pos(); std::cout << "Proxima\n";    // row #18
      pos(); std::cout << "Centauri\n"; // row #19
//        ↑: column #11
}
```

## See also
- [line](/cpp/utility/source_location/line/)
- [file_name](/cpp/utility/source_location/file_name/)
- [function_name](/cpp/utility/source_location/function_name/)
- [Filename and line information](/cpp/preprocessor/line/)
