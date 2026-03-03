---
title: "operator<<(std::basic_string_view)"
source_path: "cpp/string/basic_string_view/operator"
header: "<string_view>"
category: "string"
since: "C++17"
---

Behaves as a [FormattedOutputFunction](/cpp/named_req/formattedoutputfunction/). After constructing and checking the sentry object, [determines the output format padding](/cpp/named_req/formattedoutputfunction/#Padding).

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT, Traits>&
operator<<( std::basic_ostream<CharT, Traits>& os,
std::basic_string_view<CharT, Traits> v );
```
_(since C++17)_

## Parameters
- `os`: a character output stream
- `v`: the view to be inserted

## Return value
os

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string_view>
 
int main()
{
    constexpr std::string_view s{"abc"};
    constexpr int width{5};
 
    // fill/left/right properties are kept until changed
    std::cout << std::setfill('-');
    std::cout << std::left;
 
    std::cout << '[' << std::setw(width) << s << "]\n";
    std::cout << '[' << std::setw(width) << s << "]\n";
 
    std::cout << std::right;
    std::cout << '[' << std::setw(width) << s << "]\n";
 
    // width is reset after each call
    std::cout << '[' << s << "]\n";
}
```

## See also
- [operator<<operator>>](/cpp/string/basic_string/operator_ltltgtgt/)
