---
title: "std::strtoimax, std::strtoumax"
source_path: "cpp/string/byte/strtoimax"
header: "<cinttypes>"
category: "string"
since: "C++11"
---

Interprets an integer value in a byte string pointed to by nptr.

## Declarations
```cpp
std::intmax_t strtoimax( const char* nptr, char** endptr, int base );
```
_(since C++11)_

```cpp
std::uintmax_t strtoumax( const char* nptr, char** endptr, int base );
```
_(since C++11)_

## Parameters
- `nptr`: pointer to the null-terminated byte string to be interpreted
- `endptr`: pointer to a pointer to character.
- `base`: base of the interpreted integer value

## Example
```cpp
#include <cinttypes>
#include <iostream>
#include <string>
 
int main()
{
    std::string str = "helloworld";
    std::intmax_t val = std::strtoimax(str.c_str(), nullptr, 36);
    std::cout << str << " in base 36 is " << val << " in base 10\n";
 
    char* nptr;
    val = std::strtoimax(str.c_str(), &nptr, 30);
    if (nptr != &str[0] + str.size())
        std::cout << str << " in base 30 is invalid."
                  << " The first invalid digit is '" << *nptr << "'\n";
}
```

## See also
- [stoistolstoll](/cpp/string/basic_string/stol/)
- [stoulstoull](/cpp/string/basic_string/stoul/)
- [strtolstrtoll](/cpp/string/byte/strtol/)
- [strtoulstrtoull](/cpp/string/byte/strtoul/)
- [wcstoimaxwcstoumax](/cpp/string/wide/wcstoimax/)
- [std::intmax_t](/cpp/types/integer/)
- [std::uintmax_t](/cpp/types/integer/)
- [strtofstrtodstrtold](/cpp/string/byte/strtof/)
- [from_chars](/cpp/utility/from_chars/)
- [atoiatolatoll](/cpp/string/byte/atoi/)
- [C documentation](/c/string/byte/strtoimax/)
