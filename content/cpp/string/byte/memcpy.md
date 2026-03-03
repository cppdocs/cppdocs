---
title: "std::memcpy"
source_path: "cpp/string/byte/memcpy"
header: "<cstring>"
category: "string"
---

Copies count bytes from the object pointed to by src to the object pointed to by dest. Both objects are reinterpreted as arrays of unsigned char.

## Declarations
```cpp
void* memcpy( void* dest, const void* src, std::size_t count );
```

## Parameters
- `dest`: pointer to the memory location to copy to
- `src`: pointer to the memory location to copy from
- `count`: number of bytes to copy

## Return value
dest

## Notes
std::memcpy may be used to [implicitly create](/cpp/language/objects/#Object_creation) objects in the destination buffer.

std::memcpy is meant to be the fastest library routine for memory-to-memory copy. It is usually more efficient than [std::strcpy](/cpp/string/byte/strcpy/), which must scan the data it copies or [std::memmove](/cpp/string/byte/memmove/), which must take precautions to handle overlapping inputs.

Several C++ compilers transform suitable memory-copying loops to std::memcpy calls.

Where [strict aliasing](/cpp/language/objects/#Strict_aliasing) prohibits examining the same memory as values of two different types, std::memcpy may be used to convert the values.

## Example
```cpp
#include <cstdint>
#include <cstring>
#include <iostream>
 
int main()
{
    // simple usage
    char source[] = "once upon a daydream...", dest[4];
    std::memcpy(dest, source, sizeof dest);
    std::cout << "dest[4] = {";
    for (int n{}; char c : dest)
        std::cout << (n++ ? ", " : "") << '\'' << c << "'";
    std::cout << "};\n";
 
    // reinterpreting
    double d = 0.1;
//  std::int64_t n = *reinterpret_cast<std::int64_t*>(&d); // aliasing violation
    std::int64_t n;
    std::memcpy(&n, &d, sizeof d); // OK
 
    std::cout << std::hexfloat << d << " is " << std::hex << n
              << " as a std::int64_t\n" << std::dec;
 
    // object creation in destination buffer
    struct S
    {
        int x{42};
        void print() const { std::cout << '{' << x << "}\n"; }
    } s;
    alignas(S) char buf[sizeof(S)];
    S* ps = new (buf) S; // placement new
    std::memcpy(ps, &s, sizeof s);
    ps->print();
}
```

## See also
- [memmove](/cpp/string/byte/memmove/)
- [memset](/cpp/string/byte/memset/)
- [wmemcpy](/cpp/string/wide/wmemcpy/)
- [copy](/cpp/string/basic_string/copy/)
- [copycopy_if](/cpp/algorithm/copy/)
- [copy_backward](/cpp/algorithm/copy_backward/)
- [is_trivially_copyable](/cpp/types/is_trivially_copyable/)
- [C documentation](/c/string/byte/memcpy/)
