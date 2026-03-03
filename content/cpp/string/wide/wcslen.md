---
title: "std::wcslen"
source_path: "cpp/string/wide/wcslen"
header: "<cwchar>"
category: "string"
---

Returns the length of a wide string, that is the number of non-null wide characters that precede the terminating null wide character.

## Declarations
```cpp
std::size_t wcslen( const wchar_t* str );
```

## Parameters
- `str`: pointer to the null-terminated wide string to be examined

## Return value
The length of the null-terminated wide string str.

## Example
```cpp
#include <iostream>
#include <cwchar>
int main()
{
    const wchar_t* str = L"Hello, world!";
    std::wcout << "The length of L\"" << str << "\" is " << std::wcslen(str) << '\n';
}
```

## See also
- [strlen](/cpp/string/byte/strlen/)
- [mblen](/cpp/string/multibyte/mblen/)
- [C documentation](/c/string/wide/wcslen/)
