---
title: "std::wcstol, std::wcstoll"
source_path: "cpp/string/wide/wcstol"
header: "<cwchar>"
category: "string"
since: "C++11"
---

Interprets an integer value in a wide string pointed to by str.

## Declarations
```cpp
long wcstol ( const wchar_t* str, wchar_t** str_end, int base );
```

```cpp
long long wcstoll( const wchar_t* str, wchar_t** str_end, int base );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated wide string to be interpreted
- `str_end`: pointer to a pointer to wide character
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [LONG_MAX](/cpp/types/climits/), [LONG_MIN](/cpp/types/climits/), [LLONG_MAX](/cpp/types/climits/) or [LLONG_MIN](/cpp/types/climits/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <cwchar>
#include <errno.h>
#include <iostream>
#include <string>
 
int main()
{
    const wchar_t* p = L"10 200000000000000000000000000000 30 -40";
    wchar_t* end;
    std::wcout << "Parsing L'" << p << "':\n";
    for (long i = std::wcstol(p, &end, 10); p != end; i = std::wcstol(p, &end, 10))
    {
        std::wcout << '\'' << std::wstring(p, end-p) << "' -> ";
        p = end;
        if (errno == ERANGE)
        {
            std::wcout << "range error, got ";
            errno = 0;
        }
        std::wcout << i << '\n';
    }
}
```

## See also
- [strtolstrtoll](/cpp/string/byte/strtol/)
- [wcstoulwcstoull](/cpp/string/wide/wcstoul/)
- [C documentation](/c/string/wide/wcstol/)
