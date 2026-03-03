---
title: "std::memset"
source_path: "cpp/string/byte/memset"
header: "<cstring>"
category: "string"
---

Copies the value static_cast<unsigned char>(ch) into each of the first count characters of the object pointed to by dest. If the object is a [potentially-overlapping subobject](/cpp/language/objects/#Subobjects) or is not [TriviallyCopyable](/cpp/named_req/triviallycopyable/) (e.g., scalar, C-compatible struct, or an array of trivially copyable type), the behavior is undefined. If count is greater than the size of the object pointed to by dest, the behavior is undefined.

## Declarations
```cpp
void* memset( void* dest, int ch, std::size_t count );
```

## Parameters
- `dest`: pointer to the object to fill
- `ch`: fill byte
- `count`: number of bytes to fill

## Return value
dest

## Notes
std::memset may be optimized away (under the [as-if](/cpp/language/as_if/) rules) if the object modified by this function is not accessed again for the rest of its lifetime (e.g., [gcc bug 8537](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=8537)). For that reason, this function cannot be used to scrub memory (e.g., to fill an array that stored a password with zeroes).

Solutions for that include [std::fill](/cpp/algorithm/fill/) with volatile pointers, (C23) [memset_explicit()](/c/string/byte/memset/), (C11) [memset_s](/c/string/byte/memset/), FreeBSD [explicit_bzero](https://www.freebsd.org/cgi/man.cgi?query=explicit_bzero) or Microsoft [SecureZeroMemory](https://msdn.microsoft.com/en-us/library/windows/desktop/aa366877.aspx).

## Example
```cpp
#include <bitset>
#include <climits>
#include <cstring>
#include <iostream>
 
int main()
{
    int a[4];
    using bits = std::bitset<sizeof(int) * CHAR_BIT>;
    std::memset(a, 0b1111'0000'0011, sizeof a);
    for (int ai : a)
        std::cout << bits(ai) << '\n';
}
```

## See also
- [memcpy](/cpp/string/byte/memcpy/)
- [memmove](/cpp/string/byte/memmove/)
- [wmemset](/cpp/string/wide/wmemset/)
- [fill](/cpp/algorithm/fill/)
- [fill_n](/cpp/algorithm/fill_n/)
- [is_trivially_copyable](/cpp/types/is_trivially_copyable/)
- [C documentation](/c/string/byte/memset/)
