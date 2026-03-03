---
title: "std::chrono::operator<<(std::chrono::day)"
source_path: "cpp/chrono/day/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Forms a [std::basic_string](/cpp/string/basic_string/)<CharT> s consisting of the day value stored in d formatted as a decimal number, with a leading zero if the result would otherwise be a single decimal digit. Then, if !d.ok(), append " is not a valid day" to the formatted string. Inserts that string into os.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os, const std::chrono::day& d );
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
    constexpr std::chrono::day d1{31}, d2{7}, d3{42}, d4{};
    std::cout << d1 << '\n'
              << d2 << '\n'
              << d3 << '\n'
              << d4 << '\n';
}
```

## See also
- [format](/cpp/utility/format/format/)
- [std::formatter<std::chrono::day>](/cpp/chrono/day/formatter/)
