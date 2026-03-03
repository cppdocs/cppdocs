---
title: "std::locale"
source_path: "cpp/locale/locale"
header: "<locale>"
category: "locale"
---

An object of class std::locale is an immutable indexed set of immutable facets. Each stream object of the C++ input/output library is associated with an std::locale object and uses its facets for parsing and formatting of all data. In addition, a locale object is associated with each [std::basic_regex](/cpp/regex/basic_regex/) object.(since C++11) Locale objects can also be used as predicates that perform string collation with the standard containers and algorithms and can be accessed directly to obtain or modify the facets they hold.

## Declarations
```cpp
class locale;
```

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    std::wcout << L"User-preferred locale setting is "
               << std::locale("").name().c_str() << L'\n';
    // on startup, the global locale is the "C" locale
    std::wcout << 1000.01 << L'\n';
 
    // replace the C++ global locale and the "C" locale with the user-preferred locale
    std::locale::global(std::locale(""));
    // use the new global locale for future wide character output
    std::wcout.imbue(std::locale());
 
    // output the same number again
    std::wcout << 1000.01 << L'\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 340 | C++98 | the set of standard facets that all locales need to hold was unclear | made clear |
| LWG 347 | C++98 | parameters of type category could accept LC constants | not accepted anymore |

## See also
- [text_encoding](/cpp/locale/text_encoding/)
- [IANA Character Sets registry](https://www.iana.org/assignments/character-sets/character-sets.xhtml)
- [use_facet](/cpp/locale/use_facet/)
- [has_facet](/cpp/locale/has_facet/)
- [imbue](/cpp/io/ios_base/imbue/)
- [getloc](/cpp/io/ios_base/getloc/)
