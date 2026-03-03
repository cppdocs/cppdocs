---
title: "wcscmp"
source_path: "c/string/wide/wcscmp"
header: "<wchar.h>"
category: "c"
---

Compares two null-terminated wide strings lexicographically.

## Declarations
```cpp
int wcscmp( const wchar_t* lhs, const wchar_t* rhs );
```
_(since C95)_

## Parameters
- `lhs, rhs`: pointers to the null-terminated wide strings to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Notes
This function is not locale-sensitive, unlike [wcscoll](/c/string/wide/wcscoll/), and the order may not be meaningful when characters from different Unicode blocks are used together or when the order of code units does not match any collation order.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
void demo(const wchar_t* lhs, const wchar_t* rhs)
{
    int rc = wcscmp(lhs, rhs);
    const char *rel = rc < 0 ? "precedes" : rc > 0 ? "follows" : "equals";
 
    setlocale(LC_ALL, "en_US.utf8");
    printf("[%ls] %s [%ls]\n", lhs, rel, rhs);
}
 
int main(void)
{
    const wchar_t* string = L"どうもありがとうございます";
    demo(string, L"どうも");
    demo(string, L"助かった");
    demo(string + 9, L"ありがとうございます" + 6);
}
```

## See also
- [wcsncmp](/c/string/wide/wcsncmp/)
- [wmemcmp](/c/string/wide/wmemcmp/)
- [strcmp](/c/string/byte/strcmp/)
- [wcscoll](/c/string/wide/wcscoll/)
- [C++ documentation](/cpp/string/wide/wcscmp/)
