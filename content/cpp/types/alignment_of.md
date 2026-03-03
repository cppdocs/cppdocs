---
title: "std::alignment_of"
source_path: "cpp/types/alignment_of"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Provides the member constant value equal to the [alignment requirement](/cpp/language/objects/#Alignment) of the type T, as if obtained by an [alignof](/cpp/language/alignof/) expression. If T is an array type, returns the alignment requirements of the element type. If T is a reference type, returns the alignment requirements of the type referred to.

## Declarations
```cpp
template< class T >
struct alignment_of;
```
_(since C++11)_

## Notes
This type trait predates the [alignof](/cpp/language/alignof/) keyword, which can be used to obtain the same value with less verbosity.

## Example
```cpp
#include <cstdint>
#include <iostream>
#include <type_traits>
 
struct A {};
struct B
{
    std::int8_t p;
    std::int16_t q;
};
 
int main()
{
    std::cout << std::alignment_of<A>::value << ' ';
    std::cout << std::alignment_of<B>::value << ' ';
    std::cout << std::alignment_of<int>() << ' '; // alt syntax
    std::cout << std::alignment_of_v<double> << '\n'; // c++17 alt syntax
}
```

## See also
- [alignof](/cpp/language/alignof/)
- [alignas](/cpp/language/alignas/)
- [aligned_storage](/cpp/types/aligned_storage/)
- [aligned_union](/cpp/types/aligned_union/)
- [max_align_t](/cpp/types/max_align_t/)
