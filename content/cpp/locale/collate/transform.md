---
title: "std::collate<CharT>::transform, do_transform"
source_path: "cpp/locale/collate/transform"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_transform of the most derived class.

## Declarations
```cpp
public:
string_type transform( const CharT* low, const CharT* high ) const;
```

```cpp
protected:
virtual string_type do_transform( const CharT* low, const CharT* high ) const;
```

## Parameters
- `low`: pointer to the first character in the sequence to transform
- `high`: one past the end pointer for the sequence to transform

## Return value
The string transformed so that lexicographic comparison of the transformed strings may be used instead of collating of the originals. In the "C" locale, the returned string is the exact copy of [low,high). In other locales, the contents of the returned string are implementation-defined, and the size may be considerably longer.

## Notes
In addition to the use in collation, the implementation-specific format of the transformed string is known to [std::regex_traits<>::transform_primary](/cpp/regex/regex_traits/transform_primary/), which is able to extract the equivalence class information.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
int main()
{
    std::locale::global(std::locale("sv_SE.utf8"));
    auto& f = std::use_facet<std::collate<wchar_t>>(std::locale());
 
    std::wstring in1 = L"\u00e4ngel";
    std::wstring in2 = L"\u00e5r";
 
    std::wstring out1 = f.transform(&in1[0], &in1[0] + in1.size());
    std::wstring out2 = f.transform(&in2[0], &in2[0] + in2.size());
 
    std::wcout << "In the Swedish locale: ";
    if (out1 < out2)
        std::wcout << in1 << " before " << in2 << '\n';
    else
        std::wcout << in2 << " before " << in1 << '\n';
 
    std::wcout << "In lexicographic comparison: ";
    if (in1 < in2)
        std::wcout << in1 << " before " << in2 << '\n';
    else
        std::wcout << in2 << " before " << in1 << '\n';
}
```

## See also
- [strxfrm](/cpp/string/byte/strxfrm/)
- [wcsxfrm](/cpp/string/wide/wcsxfrm/)
