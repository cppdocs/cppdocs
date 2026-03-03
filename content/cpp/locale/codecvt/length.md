---
title: "std::codecvt<InternT,ExternT,StateT>::length, do_length"
source_path: "cpp/locale/codecvt/length"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_length of the most derived class.

## Declarations
```cpp
public:
int length( StateT& state, const ExternT* from, const ExternT* from_end,
std::size_t max ) const;
```

```cpp
protected:
virtual int do_length( StateT& state, const ExternT* from, const ExternT* from_end,
std::size_t max ) const;
```

## Return value
The number of ExternT characters that would be consumed if converted by [do_in()](/cpp/locale/codecvt/in/) until either all from_end - from characters were consumed or max InternT characters were produced, or a conversion error occurred.

## Example
```cpp
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    using facet_type = std::codecvt<wchar_t, char, std::mbstate_t>;
 
    // narrow multibyte encoding
    std::string s = "z\u00df\u6c34\U0001d10b"; // or u8"zß水𝄋"
              // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b"
 
    std::locale loc("en_US.UTF-8");
    facet_type const& codecvt_facet = std::use_facet<facet_type>(loc);
    std::mbstate_t mb = std::mbstate_t();
    std::cout << "Only the first "
              << codecvt_facet.length(mb, s.data(), s.data() + s.size(), 2)
              << " bytes out of " << s.size() << " would be consumed"
                 " to produce the first 2 characters\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 75 | C++98 | the effect on state was not specified | specified |
| LWG 305 | C++98 | std::codecvt<wchar_t, char, std::mbstate_t>::do_lengthwas required to return std::min(max, from_end - from) | not required |

## See also
- [do_in](/cpp/locale/codecvt/in/)
