---
title: "std::regex_traits<CharT>::isctype"
source_path: "cpp/regex/regex_traits/isctype"
category: "regex"
---

Determines whether the character c belongs to the character class identified by f, which, in turn, is a value returned by [lookup_classname()](/cpp/regex/regex_traits/lookup_classname/) or a bitwise OR of several such values.

## Declarations
```cpp
bool isctype( CharT c, char_class_type f ) const;
```

## Parameters
- `c`: the character to classify
- `f`: the bitmask obtained from one or several calls to lookup_classname()

## Return value
true if c is classified by f, false otherwise.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::regex_traits<char> t;
    std::string str_alnum = "alnum";
    auto a = t.lookup_classname(str_alnum.begin(), str_alnum.end());
    std::string str_w = "w"; // [:w:] is [:alnum:] plus '_'
    auto w = t.lookup_classname(str_w.begin(), str_w.end());
    std::cout << std::boolalpha
              << t.isctype('A', w) << ' ' << t.isctype('A', a) << '\n'
              << t.isctype('_', w) << ' ' << t.isctype('_', a) << '\n'
              << t.isctype(' ', w) << ' ' << t.isctype(' ', a) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2018 | C++11 | the value of m was unspecified | matches lookup_classname()'s minimal support |

## See also
- [lookup_classname](/cpp/regex/regex_traits/lookup_classname/)
- [do_is](/cpp/locale/ctype/is/)
- [iswctype](/cpp/string/wide/iswctype/)
- [LC_CTYPE](/cpp/locale/lc_categories/)
