---
title: "wmemcmp"
source_path: "c/string/wide/wmemcmp"
header: "<wchar.h>"
category: "c"
---

Compares the first count wide characters of the wide character (or compatible integer type) arrays pointed to by lhs and rhs. The comparison is done lexicographically.

## Declarations
```cpp
int wmemcmp( const wchar_t* lhs, const wchar_t* rhs, size_t count );
```
_(since C95)_

## Parameters
- `lhs, rhs`: pointers to the wide character arrays to compare
- `count`: number of wide characters to examine

## Return value
Negative value if the value of the first differing wide character in lhs is less than the value of the corresponding wide character in rhs: lhs precedes rhs in lexicographical order.

## Notes
This function is not locale-sensitive and pays no attention to the values of the wchar_t objects it examines: nulls as well as invalid wide characters are compared too.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <wchar.h>
 
void demo(const wchar_t* lhs, const wchar_t* rhs, size_t sz)
{
    for (size_t n = 0; n < sz; ++n)
        putwchar(lhs[n]);
 
    int rc = wmemcmp(lhs, rhs, sz);
    if (rc == 0)
        wprintf(L" compares equal to ");
    else if(rc < 0)
        wprintf(L" precedes ");
    else if(rc > 0)
        wprintf(L" follows ");
 
    for (size_t n = 0; n < sz; ++n)
        putwchar(rhs[n]);
    wprintf(L" in lexicographical order\n");
}
 
int main(void)
{
    setlocale(LC_ALL, "en_US.utf8");
 
    wchar_t a1[] = {L'α',L'β',L'γ'};
    wchar_t a2[] = {L'α',L'β',L'δ'};
 
    size_t sz = sizeof a1 / sizeof *a1;
    demo(a1, a2, sz);
    demo(a2, a1, sz);
    demo(a1, a1, sz);
}
```

## See also
- [wcscmp](/c/string/wide/wcscmp/)
- [memcmp](/c/string/byte/memcmp/)
- [wcsncmp](/c/string/wide/wcsncmp/)
- [C++ documentation](/cpp/string/wide/wmemcmp/)
