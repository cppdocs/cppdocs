---
title: "std::experimental::simd_mask<T,Abi>::simd_mask"
source_path: "cpp/experimental/simd/simd_mask/simd_mask"
category: "experimental"
---

1) Constructs a simd_mask using [default initialization](/cpp/language/default_initialization/) (constructed without initializer) or [value initialization](/cpp/language/value_initialization/) (constructed with an empty initializer).

## Declarations
```cpp
simd_mask() noexcept = default;
```
_(parallelism TS v2)_

```cpp
explicit simd_mask( bool value ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class U >
simd_mask( const simd_mask<U, simd_abi::fixed_size<size()>>& other ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class U, class Flags >
simd_mask( const bool* mem, Flags flags );
```
_(parallelism TS v2)_

```cpp
simd_mask( const simd_mask& other ) noexcept = default;
```
_(parallelism TS v2) (implicitly declared)_

```cpp
simd_mask( simd_mask&& other ) noexcept = default;
```
_(parallelism TS v2) (implicitly declared)_

## Parameters
- `value`: the value used for initialization of all simd_mask elements
- `other`: another simd_mask to copy from
- `mem`: a pointer into an array where [mem, mem + size()) is a valid range
- `flags`: if of type vector_aligned_tag, the load constructor may assume mem to point to storage aligned by memory_alignment_v<simd_mask>

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    [[maybe_unused]]
    stdx::native_simd_mask<int> a;       // uninitialized
    stdx::native_simd_mask<int> b(true); // all elements initialized with true
    stdx::native_simd_mask<int> c{};     // all elements initialized with false
 
    alignas(stdx::memory_alignment_v<stdx::native_simd_mask<int>>)
        std::array<bool, stdx::native_simd_mask<int>::size() * 2> mem = {};
    std::ranges::generate(mem, [i{0}] mutable -> bool { return i++ & 1; });
 
    stdx::native_simd_mask<int> d(&mem[0], stdx::vector_aligned);  // {0, 1, 0, 1, ...}
    stdx::native_simd_mask<int> e(&mem[1], stdx::element_aligned); // {1, 0, 1, 0, ...}
 
    const auto xored = b ^ c ^ d ^ e;
 
    for (std::size_t i{}; i != xored.size(); ++i)
        std::cout << xored[i] << ' ';
    std::cout << '\n';
}
```

## See also
- [element_aligned_tagelement_aligned](/cpp/experimental/simd/element_aligned/)
- [vector_aligned_tagvector_aligned](/cpp/experimental/simd/vector_aligned/)
- [overaligned_tagoveraligned](/cpp/experimental/simd/overaligned/)
- [memory_alignment](/cpp/experimental/simd/memory_alignment/)
- [vector_aligned](/cpp/experimental/simd/vector_aligned/)
- [copy_from](/cpp/experimental/simd/simd_mask/copy_from/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)
