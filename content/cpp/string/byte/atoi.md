---
title: "std::atoi, std::atol, std::atoll"
source_path: "cpp/string/byte/atoi"
header: "<cstdlib>"
category: "string"
since: "C++11"
---

Interprets an integer value in a byte string pointed to by str. The implied radix is always 10.

## Declarations
```cpp
int atoi( const char* str );
```

```cpp
long atol( const char* str );
```

```cpp
long long atoll( const char* str );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted

## Return value
Integer value corresponding to the contents of str on success.

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
int main()
{
    const auto data =
    {
        "42",
        "0x2A", // treated as "0" and junk "x2A", not as hexadecimal
        "3.14159",
        "31337 with words",
        "words and 2",
        "-012345",
        "10000000000" // note: out of int32_t range
    };
 
    for (const char* s : data)
    {
        const int i{std::atoi(s)};
        std::cout << "std::atoi('" << s << "') is " << i << '\n';
        if (const long long ll{std::atoll(s)}; i != ll)
            std::cout << "std::atoll('" << s << "') is " << ll << '\n';
    }
}
```

## See also
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [stoulstoull](/cpp/string/basic_string/stoul/)
- [strtolstrtoll](/cpp/string/byte/strtol/)
- [strtoulstrtoull](/cpp/string/byte/strtoul/)
- [strtoimaxstrtoumax](/cpp/string/byte/strtoimax/)
- [std::intmax_t](/cpp/types/integer/)
- [std::uintmax_t](/cpp/types/integer/)
- [from_chars](/cpp/utility/from_chars/)
- [C documentation](/c/string/byte/atoi/)
