---
title: "std::mbsinit"
source_path: "cpp/string/multibyte/mbsinit"
header: "<cwchar>"
category: "string"
---

If ps is not a null pointer, the mbsinit function determines whether the pointed-to [std::mbstate_t](/cpp/string/multibyte/mbstate_t/) object describes the initial conversion state.

## Declarations
```cpp
int mbsinit( const std::mbstate_t* ps);
```

## Parameters
- `ps`: pointer to the std::mbstate_t object to examine

## Return value
0 if ps is not a null pointer and does not represent the initial conversion state, nonzero value otherwise.

## Notes
Although a zero-initialized [std::mbstate_t](/cpp/string/multibyte/mbstate_t/) always represents the initial conversion state, there may be other values of [std::mbstate_t](/cpp/string/multibyte/mbstate_t/) that also represent the initial conversion state.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <string>
 
int main()
{
    // allow mbrlen() to work with UTF-8 multibyte encoding
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    std::string str = "水"; // or u8"\u6c34" or "\xe6\xb0\xb4"
    std::mbstate_t mb = std::mbstate_t();
    (void)std::mbrlen(&str[0], 1, &mb);
    if (!std::mbsinit(&mb))
        std::cout << "After processing the first 1 byte of " << str
                  << " the conversion state is not initial\n";
 
    (void)std::mbrlen(&str[1], str.size() - 1, &mb);
    if (std::mbsinit(&mb))
        std::cout << "After processing the remaining 2 bytes of " << str
                  << ", the conversion state is initial conversion state\n";
}
```

## See also
- [mbstate_t](/cpp/string/multibyte/mbstate_t/)
- [C documentation](/c/string/multibyte/mbsinit/)
