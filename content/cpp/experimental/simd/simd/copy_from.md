---
title: "std::experimental::simd<T,Abi>::copy_from"
source_path: "cpp/experimental/simd/simd/copy_from"
category: "experimental"
---

The load function replaces all elements of a [simd](/cpp/experimental/simd/simd/) such that the ith element is assigned with static_cast<T>(mem[i]) for all i in the range of [0,[size()](/cpp/experimental/simd/simd/size/)).

## Declarations
```cpp
template< class U, class Flags >
void copy_from( const U* mem, Flags flags );
```
_(parallelism TS v2)_

## Parameters
- `mem`: a pointer into an array where [mem, mem + size()) is a valid range
- `flags`: if of type vector_aligned_tag, the load constructor may assume mem to point to storage aligned by memory_alignment_v<simd, U>

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
#include <numeric>
namespace stdx = std::experimental;
 
void print(auto const& a)
{
    for (std::size_t i{}; i != std::size(a); ++i)
        std::cout << a[i] << ' ';
    std::cout << '\n';
}
 
int main()
{
    alignas(stdx::memory_alignment_v<stdx::native_simd<int>>)
        std::array<int, stdx::native_simd<int>::size() * 2> mem = {};
    std::iota(mem.begin(), mem.end(), 0);
    print(mem);
 
    stdx::native_simd<int> a; // uninitialized
 
    a.copy_from(&mem[0], stdx::vector_aligned);
    print(a);
 
    a.copy_from(&mem[1], stdx::element_aligned); // vector_aligned would likely crash
    print(a);
}
```

## See also
- [memory_alignment](/cpp/experimental/simd/memory_alignment/)
- [vector_aligned](/cpp/experimental/simd/vector_aligned/)
- [copy_to](/cpp/experimental/simd/simd/copy_to/)
- [simd](/cpp/experimental/simd/simd/)
- [(constructor)](/cpp/experimental/simd/simd/simd/)
- [simd](/cpp/experimental/simd/simd/)
