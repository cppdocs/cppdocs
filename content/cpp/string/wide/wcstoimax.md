---
title: "std::wcstoimax, std::wcstoumax"
source_path: "cpp/string/wide/wcstoimax"
header: "<cinttypes>"
category: "string"
since: "C++11"
---

Interprets an unsigned integer value in a wide string pointed to by nptr.

## Declarations
```cpp
std::intmax_t wcstoimax( const wchar_t* nptr, wchar_t** endptr, int base );
```
_(since C++11)_

```cpp
std::uintmax_t wcstoumax( const wchar_t* nptr, wchar_t** endptr, int base );
```
_(since C++11)_

## Parameters
- `nptr`: pointer to the null-terminated wide string to be interpreted
- `endptr`: pointer to a pointer to a wide character
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [INTMAX_MAX](/cpp/types/integer/), [INTMAX_MIN](/cpp/types/integer/), [UINTMAX_MAX](/cpp/types/integer/), or 0 is returned, as appropriate. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <cinttypes>
#include <iostream>
#include <string>
 
int main()
{
    std::wstring str = L"helloworld";
    std::intmax_t val = std::wcstoimax(str.c_str(), nullptr, 36);
    std::wcout << str << " in base 36 is " << val << " in base 10\n";
 
    wchar_t* nptr;
    val = std::wcstoimax(str.c_str(), &nptr, 30);
    if (nptr != &str[0] + str.size())
        std::wcout << str << " in base 30 is invalid."
                   << " The first invalid digit is " << *nptr << '\n';
}
```

## See also
- [strtoimaxstrtoumax](/cpp/string/byte/strtoimax/)
- [std::intmax_t](/cpp/types/integer/)
- [std::uintmax_t](/cpp/types/integer/)
- [wcstolwcstoll](/cpp/string/wide/wcstol/)
- [wcstoulwcstoull](/cpp/string/wide/wcstoul/)
- [C documentation](/c/string/wide/wcstoimax/)
