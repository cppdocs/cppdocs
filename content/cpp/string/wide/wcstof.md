---
title: "std::wcstof, std::wcstod, std::wcstold"
source_path: "cpp/string/wide/wcstof"
header: "<cwchar>"
category: "string"
since: "C++11"
---

Interprets a floating point value in a wide string pointed to by str.

## Declarations
```cpp
float wcstof( const wchar_t* str, wchar_t** str_end );
```
_(since C++11)_

```cpp
double wcstod( const wchar_t* str, wchar_t** str_end );
```

```cpp
long double wcstold( const wchar_t* str, wchar_t** str_end );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated wide string to be interpreted
- `str_end`: pointer to a pointer to a wide character

## Return value
Floating point value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [HUGE_VAL](/cpp/numeric/math/huge_val/), [HUGE_VALF](/cpp/numeric/math/huge_val/) or [HUGE_VALL](/cpp/numeric/math/huge_val/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <cerrno>
#include <clocale>
#include <cwchar>
#include <iostream>
#include <string>
 
int main()
{
    const wchar_t* p = L"111.11 -2.22 0X1.BC70A3D70A3D7P+6 -Inf 1.18973e+4932zzz";
    wchar_t* end;
    std::wcout << "Parsing L\"" << p << "\":\n";
    for (double f = std::wcstod(p, &end); p != end; f = std::wcstod(p, &end))
    {
        std::wcout << "  '" << std::wstring(p, end-p) << "' -> ";
        p = end;
        if (errno == ERANGE)
        {
            std::wcout << "range error, got ";
            errno = 0;
        }
        std::wcout << f << '\n';
    }
 
    if (std::setlocale(LC_NUMERIC, "de_DE.utf8"))
    {
        std::wcout << L"With de_DE.utf8 locale:\n";
        std::wcout << L"  '123.45' -> " << std::wcstod(L"123.45", 0) << L'\n';
        std::wcout << L"  '123,45' -> " << std::wcstod(L"123,45", 0) << L'\n';
    }
}
```

## See also
- [strtofstrtodstrtold](/cpp/string/byte/strtof/)
- [C documentation](/c/string/wide/wcstof/)
