---
title: "std::strtol, std::strtoll"
source_path: "cpp/string/byte/strtol"
header: "<cstdlib>"
category: "string"
since: "C++11"
---

Interprets an integer value in a byte string pointed to by str.

## Declarations
```cpp
long strtol( const char* str, char** str_end, int base );
```

```cpp
long long strtoll( const char* str, char** str_end, int base );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted
- `str_end`: pointer to a pointer to character
- `base`: base of the interpreted integer value

## Example
```cpp
#include <cerrno>
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    const char* p = "10 200000000000000000000000000000 30 -40";
    std::cout << "Parsing " << std::quoted(p) << ":\n";
 
    for (;;)
    {
        // errno can be set to any non-zero value by a library function call
        // regardless of whether there was an error, so it needs to be cleared
        // in order to check the error set by strtol
        errno = 0;
        char* p_end{};
        const long i = std::strtol(p, &p_end, 10);
        if (p == p_end)
            break;
 
        const bool range_error = errno == ERANGE;
        const std::string extracted(p, p_end - p);
        p = p_end;
 
        std::cout << "Extracted " << std::quoted(extracted)
                  << ", strtol returned " << i << '.';
        if (range_error)
            std::cout << "\n  Range error occurred.";
 
        std::cout << '\n';
    }
}
```

## See also
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [strtoulstrtoull](/cpp/string/byte/strtoul/)
- [strtoimaxstrtoumax](/cpp/string/byte/strtoimax/)
- [std::intmax_t](/cpp/types/integer/)
- [std::uintmax_t](/cpp/types/integer/)
- [wcstolwcstoll](/cpp/string/wide/wcstol/)
- [strtofstrtodstrtold](/cpp/string/byte/strtof/)
- [from_chars](/cpp/utility/from_chars/)
- [atoiatolatoll](/cpp/string/byte/atoi/)
- [C documentation](/c/string/byte/strtol/)
