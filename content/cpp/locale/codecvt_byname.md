---
title: "std::codecvt_byname"
source_path: "cpp/locale/codecvt_byname"
header: "<locale>"
category: "locale"
---

std::codecvt_byname is a [std::codecvt](/cpp/locale/codecvt/) facet which encapsulates multibyte/wide character conversion rules of a locale specified at its construction.

## Declarations
```cpp
template< class InternT, class ExternT, class State >
class codecvt_byname : public std::codecvt<InternT, ExternT, State>;
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Example
```cpp
#include <fstream>
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    // GB18030 narrow multibyte encoding
    std::ofstream("text.txt") << "\x7a"              // letter 'z', U+007a
                                 "\x81\x30\x89\x38"  // letter 'ß', U+00df
                                 "\xcb\xae"          // CJK ideogram '水' (water), U+6c34
                                 "\x94\x32\xbc\x35"; // musical sign '𝄋' (segno), U+1d10b
 
    std::wifstream fin("text.txt");
    fin.imbue(std::locale(fin.getloc(),
              new std::codecvt_byname<wchar_t, char, std::mbstate_t>("zh_CN.gb18030")));
 
    for (wchar_t c; fin.get(c);)
        std::cout << std::hex << std::showbase << static_cast<unsigned>(c) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 21 | C++98 | the standard library did not need to provideany std::codecvt_byname specializations | two specializations are required |

## See also
- [codecvt](/cpp/locale/codecvt/)
