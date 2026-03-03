---
title: "std::codecvt<InternT,ExternT,StateT>::out, do_out"
source_path: "cpp/locale/codecvt/out"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_out of the most derived class.

## Declarations
```cpp
public:
result out( StateT& state,
const InternT* from,
const InternT* from_end,
const InternT*& from_next,
ExternT* to,
ExternT* to_end,
ExternT*& to_next ) const;
```

```cpp
protected:
virtual result do_out( StateT& state,
const InternT* from,
const InternT* from_end,
const InternT*& from_next,
ExternT* to,
ExternT* to_end,
ExternT*& to_next ) const;
```

## Return value
A value of type [std::codecvt_base::result](/cpp/locale/codecvt_base/), indicating the success status as follows:

## Notes
Requires that from <= from_end && to <= to_end and that state either representing the initial shift state or obtained by converting the preceding characters in the sequence.

While codecvt supports N:M conversions (e.g. UTF-16 to UTF-8, where two internal characters may be necessary to decide what external characters to output), [std::basic_filebuf](/cpp/io/basic_filebuf/) can only use codecvt facets that define a 1:N conversion, that is it must be able to process one internal character at a time when writing to a file.

When performing N:M conversions, this function may return [std::codecvt_base::partial](/cpp/locale/codecvt_base/) after consuming all source characters (from_next == from_end). This means that another internal character is needed to complete the conversion (e.g. when converting UTF-16 to UTF-8, if the last character in the source buffer is a high surrogate).

The effect on state is deliberately unspecified. In standard facets, it is used to maintain shift state like when calling [std::wcsrtombs](/cpp/string/multibyte/wcsrtombs/), and is therefore updated to reflect the shift state after the last successfully converted character, but a user-defined facet is free to use it to maintain any other state, e.g. count the number of special characters encountered.

## Example
```cpp
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    auto& f = std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(std::locale());
    std::wstring internal = L"z\u00df\u6c34\U0001f34c"; // L"zß水🍌"
 
    // note that the following can be done with wstring_convert
    std::mbstate_t mb{}; // initial shift state
    std::string external(internal.size() * f.max_length(), '\0'); 
    const wchar_t* from_next;
    char* to_next;
    f.out(mb, &internal[0], &internal[internal.size()], from_next,
              &external[0], &external[external.size()], to_next);
    // error checking skipped for brevity
    external.resize(to_next - &external[0]);
 
    std::cout << "The string in narrow multibyte encoding: " << external << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 76 | C++98 | it was unclear whether the conversion is requiredto support taking one internal character at a time | only required if usedby basic_filebuf |

## See also
- [overflow](/cpp/io/basic_filebuf/overflow/)
- [to_bytes](/cpp/locale/wstring_convert/to_bytes/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [do_in](/cpp/locale/codecvt/in/)
