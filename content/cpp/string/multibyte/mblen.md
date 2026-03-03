---
title: "std::mblen"
source_path: "cpp/string/multibyte/mblen"
header: "<cstdlib>"
category: "string"
---

Determines the size, in bytes, of the multibyte character whose first byte is pointed to by s.

## Declarations
```cpp
int mblen( const char* s, std::size_t n );
```

## Parameters
- `s`: pointer to the multibyte character
- `n`: limit on the number of bytes in s that can be examined

## Return value
If s is not a null pointer, returns the number of bytes that are contained in the multibyte character or -1 if the first bytes pointed to by s do not form a valid multibyte character or 0 if s is pointing at the null character '\0'.

## Notes
Each call to mblen updates the internal global conversion state (a static object of type [std::mbstate_t](/cpp/string/multibyte/mbstate_t/), only known to this function). If the multibyte encoding uses shift states, care must be taken to avoid backtracking or multiple scans. In any case, multiple threads should not call mblen without synchronization: [std::mbrlen](/cpp/string/multibyte/mbrlen/) may be used instead.

## Example
```cpp
#include <clocale>
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <stdexcept>
#include <string_view>
 
// the number of characters in a multibyte string is the sum of mblen()'s
// note: the simpler approach is std::mbstowcs(nullptr, s.c_str(), s.size())
std::size_t strlen_mb(const std::string_view s)
{
    std::mblen(nullptr, 0); // reset the conversion state
    std::size_t result = 0;
    const char* ptr = s.data();
    for (const char* const end = ptr + s.size(); ptr < end; ++result)
    {
        const int next = std::mblen(ptr, end - ptr);
        if (next == -1)
            throw std::runtime_error("strlen_mb(): conversion error");
        ptr += next;
    }
    return result;
}
 
void dump_bytes(const std::string_view str)
{
    std::cout << std::hex << std::uppercase << std::setfill('0');
    for (unsigned char c : str)
        std::cout << std::setw(2) << static_cast<int>(c) << ' ';
    std::cout << std::dec << '\n';
}
 
int main()
{
    // allow mblen() to work with UTF-8 multibyte encoding
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    const std::string_view str = "z\u00df\u6c34\U0001f34c"; // or u8"zß水🍌"
    std::cout << std::quoted(str) << " is " << strlen_mb(str)
              << " characters, but as much as " << str.size() << " bytes: ";
    dump_bytes(str);
}
```

## See also
- [mbtowc](/cpp/string/multibyte/mbtowc/)
- [mbrlen](/cpp/string/multibyte/mbrlen/)
- [C documentation](/c/string/multibyte/mblen/)
