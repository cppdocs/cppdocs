---
title: "wcsncmp"
source_path: "c/string/wide/wcsncmp"
header: "<wchar.h>"
category: "c"
---

Compares at most count wide characters of two null-terminated wide strings. The comparison is done lexicographically.

## Declarations
```cpp
int wcsncmp( const wchar_t* lhs, const wchar_t* rhs, size_t count );
```
_(since C95)_

## Parameters
- `lhs, rhs`: pointers to the null-terminated wide strings to compare
- `count`: maximum number of characters to compare

## Return value
Negative value if lhs appears before rhs in lexicographical order.

## Notes
This function is not locale-sensitive, unlike [wcscoll](/c/string/wide/wcscoll/) and [wcsxfrm](/c/string/wide/wcsxfrm/).

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <locale.h>
 
void demo(const wchar_t *lhs, const wchar_t *rhs, int sz)
{
    int rc = wcsncmp(lhs, rhs, sz);
    if(rc == 0)
        printf("First %d characters of [%ls] equal [%ls]\n", sz, lhs, rhs);
    else if(rc < 0)
        printf("First %d characters of [%ls] precede [%ls]\n", sz, lhs, rhs);
    else if(rc > 0)
        printf("First %d characters of [%ls] follow [%ls]\n", sz, lhs, rhs);
}
 
int main(void)
{
    const wchar_t *str1 = L"안녕하세요";
    const wchar_t *str2 = L"안녕히 가십시오";
 
    setlocale(LC_ALL, "en_US.utf8");
    demo(str1, str2, 5);
    demo(str2, str1, 8);
    demo(str1, str2, 2);
}
```

## See also
- [wcscmp](/c/string/wide/wcscmp/)
- [wmemcmp](/c/string/wide/wmemcmp/)
- [wcscoll](/c/string/wide/wcscoll/)
- [C++ documentation](/cpp/string/wide/wcsncmp/)
