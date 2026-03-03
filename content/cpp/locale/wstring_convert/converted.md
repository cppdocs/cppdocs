---
title: "std::wstring_convert<Codecvt,Elem,Wide_alloc,Byte_alloc>::converted"
source_path: "cpp/locale/wstring_convert/converted"
header: "<locale>"
category: "locale"
---

Returns the number of source characters that were successfully processed by the most recent [from_bytes()](/cpp/locale/wstring_convert/from_bytes/) or [to_bytes()](/cpp/locale/wstring_convert/to_bytes/).

## Declarations
```cpp
std::size_t converted() const noexcept;
```

## Return value
[cvtcount](/cpp/locale/wstring_convert/#cvtcount)

## Example
```cpp
#include <codecvt>
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    std::string utf8 = "z\u00df\u6c34\U0001d10b"; // or u8"zß水𝄋"
                   // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b";
    std::cout << "original UTF-8 string size: " << utf8.size() << '\n';
 
    // the UTF-8 - UTF-32 standard conversion facet
    std::wstring_convert<std::codecvt_utf8<char32_t>, char32_t> cvt;
 
    // UTF-8 to UTF-32
    std::u32string utf32 = cvt.from_bytes(utf8);
    std::cout << "UTF-32 string size: " << utf32.size() << '\n';
    std::cout << "converted() == " << cvt.converted() << '\n';
 
    // UTF-32 to UTF-8
    utf8 = cvt.to_bytes(utf32);
    std::cout << "new UTF-8 string size: " << utf8.size() << '\n';
    std::cout << "converted() == " << cvt.converted() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2174 | C++11 | wstring_convert::converted was not required to be noexcept | required |

## See also
- [to_bytes](/cpp/locale/wstring_convert/to_bytes/)
- [from_bytes](/cpp/locale/wstring_convert/from_bytes/)
