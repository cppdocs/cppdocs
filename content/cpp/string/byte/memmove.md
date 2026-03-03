---
title: "std::memmove"
source_path: "cpp/string/byte/memmove"
header: "<cstring>"
category: "string"
---

Copies count characters from the object pointed to by src to the object pointed to by dest. Both objects are reinterpreted as arrays of unsigned char.

## Declarations
```cpp
void* memmove( void* dest, const void* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the memory location to copy to
- `src`: pointer to the memory location to copy from
- `count`: number of bytes to copy

## Return value
dest

## Notes
std::memmove may be used to [implicitly create](/cpp/language/objects/#Object_creation) objects in the destination buffer.

Despite being specified "as if" a temporary buffer is used, actual implementations of this function do not incur the overhead of double copying or extra memory. For small count, it may load up and write out registers; for larger blocks, a common approach (glibc and bsd libc) is to copy bytes forwards from the beginning of the buffer if the destination starts before the source, and backwards from the end otherwise, with a fall back to [std::memcpy](/cpp/string/byte/memcpy/) when there is no overlap at all.

Where [strict aliasing](/cpp/language/objects/#Strict_aliasing) prohibits examining the same memory as values of two different types, std::memmove may be used to convert the values.

## Example
```cpp
#include <cstring>
#include <iostream>
 
int main()
{
    char str[] = "1234567890";
    std::cout << str << '\n';
    std::memmove(str + 4, str + 3, 3); // copies from [4, 5, 6] to [5, 6, 7]
    std::cout << str << '\n';
}
```

## See also
- [memcpy](/cpp/string/byte/memcpy/)
- [memset](/cpp/string/byte/memset/)
- [wmemmove](/cpp/string/wide/wmemmove/)
- [copycopy_if](/cpp/algorithm/copy/)
- [copy_backward](/cpp/algorithm/copy_backward/)
- [is_trivially_copyable](/cpp/types/is_trivially_copyable/)
- [C documentation](/c/string/byte/memmove/)
