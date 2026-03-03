---
title: "std::strtok"
source_path: "cpp/string/byte/strtok"
header: "<cstring>"
category: "string"
---

Finds the next token in a null-terminated byte string pointed to by str. The separator characters are identified by null-terminated byte string pointed to by delim.

## Declarations
```cpp
char* strtok( char* str, const char* delim );
```

## Parameters
- `str`: pointer to the null-terminated byte string to tokenize
- `delim`: pointer to the null-terminated byte string identifying delimiters

## Return value
Pointer to the beginning of the next token or a nullptr if there are no more tokens.

## Notes
This function is destructive: it writes the '\0' characters in the elements of the string str. In particular, a [string literal](/cpp/language/string_literal/) cannot be used as the first argument of std::strtok.

Each call to this function modifies a static variable: is not thread safe.

Unlike most other tokenizers, the delimiters in std::strtok can be different for each subsequent token, and can even depend on the contents of the previous tokens.

## Example
```cpp
#include <cstring>
#include <iomanip>
#include <iostream>
 
int main() 
{
    char input[] = "one + two * (three - four)!";
    const char* delimiters = "! +- (*)";
    char* token = std::strtok(input, delimiters);
    while (token)
    {
        std::cout << std::quoted(token) << ' ';
        token = std::strtok(nullptr, delimiters);
    }
 
    std::cout << "\nContents of the input string now:\n\"";
    for (std::size_t n = 0; n < sizeof input; ++n)
    {
        if (const char c = input[n]; c != '\0')
            std::cout << c;
        else
            std::cout << "\\0";
    }
    std::cout << "\"\n";
}
```

## See also
- [strpbrk](/cpp/string/byte/strpbrk/)
- [strcspn](/cpp/string/byte/strcspn/)
- [strspn](/cpp/string/byte/strspn/)
- [ranges::split_viewviews::split](/cpp/ranges/split_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [C documentation](/c/string/byte/strtok/)
