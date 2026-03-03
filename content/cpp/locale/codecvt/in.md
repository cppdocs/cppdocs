---
title: "std::codecvt<InternT,ExternT,StateT>::in, std::codecvt<InternT,ExternT,StateT>::do_in"
source_path: "cpp/locale/codecvt/in"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_in of the most derived class.

## Declarations
```cpp
public:
result in( StateT& state,
const ExternT* from,
const ExternT* from_end,
const ExternT*& from_next,
InternT* to,
InternT* to_end,
InternT*& to_next ) const;
```

```cpp
protected:
virtual result do_in( StateT& state,
const ExternT* from,
const ExternT* from_end,
const ExternT*& from_next,
InternT* to,
InternT* to_end,
InternT*& to_next ) const;
```

## Return value
A value of type [std::codecvt_base::result](/cpp/locale/codecvt_base/), indicating the success status as follows:

## Notes
Requires that from <= from_end && to <= to_end and that state either representing the initial shift state or obtained by converting the preceding characters in the sequence.

The effect on state is deliberately unspecified. In standard facets, it is used to maintain shift state like when calling [std::mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/), and is therefore updated to reflect the conversion state after the last processed external character, but a user-defined facet is free to use it to maintain any other state, e.g. count the number of special characters encountered.

## Example
```cpp
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    auto const& f = std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>
        (std::locale());
    std::string external = "z\u00df\u6c34\U0001d10b"; // or u8"zß水𝄋"
                     // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b"
 
    // note that the following can be done with wstring_convert
    std::mbstate_t mb = std::mbstate_t(); // initial shift state
    std::wstring internal(external.size(), '\0'); 
    const char* from_next;
    wchar_t* to_next;
    f.in(mb, &external[0], &external[external.size()], from_next,
             &internal[0], &internal[internal.size()], to_next);
    // error checking skipped for brevity
    internal.resize(to_next - &internal[0]);
 
    std::wcout << L"The string in wide encoding: " << internal << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 76 | C++98 | it was unclear whether the conversion is required tosupport producing one internal character at a time | only required if usedby basic_filebuf |

## See also
- [underflow](/cpp/io/basic_filebuf/underflow/)
- [from_bytes](/cpp/locale/wstring_convert/from_bytes/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [do_out](/cpp/locale/codecvt/out/)
