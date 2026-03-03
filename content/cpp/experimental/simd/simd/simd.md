---
title: "std::experimental::simd<T,Abi>::simd"
source_path: "cpp/experimental/simd/simd/simd"
category: "experimental"
---

1) Constructs a simd using [default initialization](/cpp/language/default_initialization/) (constructed without initializer) or [value initialization](/cpp/language/value_initialization/) (constructed with an empty initializer).

## Declarations
```cpp
simd() noexcept = default;
```
_(parallelism TS v2)_

```cpp
template< class U >
simd( U&& value ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class U >
simd( const simd<U, simd_abi::fixed_size<size()>>& other ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class G >
explicit simd( G&& generator ) noexcept;
```
_(parallelism TS v2)_

```cpp
template< class U, class Flags >
simd( const U* mem, Flags flags );
```
_(parallelism TS v2)_

```cpp
simd( const simd& other ) noexcept = default;
```
_(parallelism TS v2) (implicitly declared)_

```cpp
simd( simd&& other ) noexcept = default;
```
_(parallelism TS v2) (implicitly declared)_

## Parameters
- `value`: the value used for initialization of all simd elements
- `other`: another simd to copy from
- `generator`: a function object used for initialization of each simd element
- `mem`: a pointer into an array where [mem, mem + size()) is a valid range
- `flags`: if of type vector_aligned_tag, the load constructor may assume mem to point to storage aligned by memory_alignment_v<simd, U>

## Example
```cpp
#include <cstddef>
#include <experimental/simd>
#include <iostream>
namespace stdx = std::experimental;
 
int main()
{
    stdx::native_simd<int> a; // uninitialized
    a = 1; // all elements set to 1
    stdx::native_simd<int> b([](int i) { return i; }); // {0, 1, 2, 3, ...}
 
    alignas(stdx::memory_alignment_v<stdx::native_simd<int>>)
        std::array<int, stdx::native_simd<int>::size() * 2> mem = {};
    for (std::size_t i = 0; i < mem.size(); ++i)
        mem[i] = i & 1;
 
    stdx::native_simd<int> c(&mem[0], stdx::vector_aligned); // {0, 1, 0, 1, ...}
    stdx::native_simd<int> d(&mem[1], stdx::element_aligned); // {1, 0, 1, 0, ...}
 
    auto sum = a + b + c + d;
 
    for (std::size_t i = 0; i < sum.size(); ++i)
        std::cout << sum[i] << ' ';
    std::cout << '\n';
}
```

## See also
- [copy_from](/cpp/experimental/simd/simd/copy_from/)
- [simd](/cpp/experimental/simd/simd/)
