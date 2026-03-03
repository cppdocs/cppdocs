---
title: "std::chrono::operator<<(std::chrono::year)"
source_path: "cpp/chrono/year/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Forms a [std::basic_string](/cpp/string/basic_string/)<CharT> s consisting of the year value stored in y formatted as a decimal number, left-padded with 0 to four digits if the result would otherwise be less than four digits. Then, if !y.ok(), append " is not a valid year" to the formatted string. Inserts that string into os.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::chrono::year& y );
```
_(since C++20)_

## Return value
os

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr std::chrono::year y1{2020}, y2{-020}, y3{98304};
    std::cout << y1 << '\n'
              << y2 << '\n'
              << y3 << '\n';
}
```

## See also
- [format](/cpp/utility/format/format/)
- [std::formatter<std::chrono::year>](/cpp/chrono/year/formatter/)
