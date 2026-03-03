---
title: "std::chrono::operator<< (std::chrono::duration)"
source_path: "cpp/chrono/duration/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Inserts a textual representation of d into os.

## Declarations
```cpp
template<
class CharT,
class Traits,
class Rep,
class Period
> std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
const std::chrono::duration<Rep, Period>& d );
```
_(since C++20)_

## Return value
A reference to the stream, i.e., os.

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono_literals;
 
int main()
{
    constexpr auto duration = 123ms;
    std::cout << duration << '\n';
}
```

## See also
- [format](/cpp/utility/format/format/)
- [std::formatter<std::chrono::duration>](/cpp/chrono/duration/formatter/)
- [operator<<operator>>](/cpp/string/basic_string/operator_ltltgtgt/)
- [to_string](/cpp/string/basic_string/to_string/)
- [to_wstring](/cpp/string/basic_string/to_wstring/)
