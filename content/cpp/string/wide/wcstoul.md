---
title: "std::wcstoul, std::wcstoull"
source_path: "cpp/string/wide/wcstoul"
header: "<cwchar>"
category: "string"
since: "C++11"
---

Interprets an unsigned integer value in a wide string pointed to by str.

## Declarations
```cpp
unsigned long wcstoul ( const wchar_t* str, wchar_t** str_end, int base );
```

```cpp
unsigned long long wcstoull( const wchar_t* str, wchar_t** str_end, int base );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated wide string to be interpreted
- `str_end`: pointer to a pointer to a wide character
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [ULONG_MAX](/cpp/types/climits/) or [ULLONG_MAX](/cpp/types/climits/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <cwchar>
#include <errno.h>
#include <iostream>
#include <string>
 
int main()
{
    const wchar_t* p = L"10 200000000000000000000000000000 30 40";
    wchar_t* end;
    std::wcout << "Parsing L'" << p << "':\n";
    for (unsigned long i = std::wcstoul(p, &end, 10);
         p != end;
         i = std::wcstoul(p, &end, 10))
    {
        std::wcout << '\'' << std::wstring(p, end - p) << "' -> ";
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
- [strtoulstrtoull](/cpp/string/byte/strtoul/)
- [wcstolwcstoll](/cpp/string/wide/wcstol/)
- [C documentation](/c/string/wide/wcstoul/)
