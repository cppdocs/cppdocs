---
title: "std::wcstok"
source_path: "cpp/string/wide/wcstok"
header: "<cwchar>"
category: "string"
---

Finds the next token in a null-terminated wide string pointed to by str. The separator characters are identified by null-terminated wide string pointed to by delim.

## Declarations
```cpp
wchar_t* wcstok( wchar_t* str, const wchar_t* delim, wchar_t ** ptr);
```

## Parameters
- `str`: pointer to the null-terminated wide string to tokenize
- `delim`: pointer to the null-terminated wide string identifying delimiters
- `ptr`: pointer to an object of type wchar_t*, which is used by wcstok to store its internal state

## Return value
Pointer to the beginning of the next token or null pointer if there are no more tokens.

## Example
```cpp
#include <cwchar>
#include <iostream>
 
int main()
{
    wchar_t input[100] = L"A bird came down the walk";
    wchar_t* buffer;
    wchar_t* token = std::wcstok(input, L" ", &buffer);
    while (token)
    {
        std::wcout << token << '\n';
        token = std::wcstok(nullptr, L" ", &buffer);
    }
}
```

## See also
- [strtok](/cpp/string/byte/strtok/)
- [C documentation](/c/string/wide/wcstok/)
