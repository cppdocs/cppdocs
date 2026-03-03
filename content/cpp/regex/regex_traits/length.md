---
title: "std::regex_traits<CharT>::length"
source_path: "cpp/regex/regex_traits/length"
category: "regex"
---

Calculates the length of a null-terminated character sequence, that is, the smallest i such that p[i] == 0.

## Declarations
```cpp
static std::size_t length( const char_type* p );
```

## Parameters
- `p`: pointer to the first element of the null-terminated character sequence

## Return value
The length of the null-terminated character string.

## Example
```cpp
#include <iostream>
#include <regex>
 
int main()
{
    std::cout << std::regex_traits<char>::length("Кошка") << '\n'
              << std::regex_traits<wchar_t>::length(L"Кошка") << '\n';
}
```
