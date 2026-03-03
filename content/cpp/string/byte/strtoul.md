---
title: "std::strtoul, std::strtoull"
source_path: "cpp/string/byte/strtoul"
header: "<cstdlib>"
category: "string"
since: "C++11"
---

Interprets an unsigned integer value in a byte string pointed to by str.

## Declarations
```cpp
unsigned long strtoul ( const char* str, char** str_end, int base );
```

```cpp
unsigned long long strtoull( const char* str, char** str_end, int base );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted
- `str_end`: pointer to a pointer to character, might be set to a position past the last character interpreted
- `base`: base of the interpreted integer value

## Return value
Integer value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs ([errno](/cpp/error/errno/) is set to ERANGE) and [ULONG_MAX](/cpp/types/climits/) or [ULLONG_MAX](/cpp/types/climits/) is returned. If no conversion can be performed, 0 is returned.

## Example
```cpp
#include <cstdlib>
#include <errno.h>
#include <iostream>
#include <string>
 
int main()
{
    const char* p = "10 200000000000000000000000000000 30 -40 - 42";
    char* end = nullptr;
    std::cout << "Parsing '" << p << "':\n";
    for (unsigned long i = std::strtoul(p, &end, 10);
        p != end;
        i = std::strtoul(p, &end, 10))
    {
        std::cout << "'" << std::string(p, end - p) << "' -> ";
        p = end;
        if (errno == ERANGE)
        {
            errno = 0;
            std::cout << "range error, got ";
        }
        std::cout << i << '\n';
    }
    std::cout << "After the loop p points to '" << p << "'\n";
}
```

## See also
- [stoulstoull](/cpp/string/basic_string/stoul/)
- [strtolstrtoll](/cpp/string/byte/strtol/)
- [strtoimaxstrtoumax](/cpp/string/byte/strtoimax/)
- [std::intmax_t](/cpp/types/integer/)
- [std::uintmax_t](/cpp/types/integer/)
- [wcstoulwcstoull](/cpp/string/wide/wcstoul/)
- [strtofstrtodstrtold](/cpp/string/byte/strtof/)
- [from_chars](/cpp/utility/from_chars/)
- [atoiatolatoll](/cpp/string/byte/atoi/)
- [C documentation](/c/string/byte/strtoul/)
