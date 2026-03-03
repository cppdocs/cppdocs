---
title: "std::allocator<T>::allocate_at_least"
source_path: "cpp/memory/allocator/allocate_at_least"
category: "memory"
since: "C++23"
---

Allocates count * sizeof(T) bytes of uninitialized storage, where count is an unspecified integer value not less than n, by calling ::[operator new](/cpp/memory/new/operator_new/) (possibly with an additional [std::align_val_t](/cpp/memory/new/align_val_t/) argument), but it is unspecified when and how this function is called.

## Declarations
```cpp
constexpr std::allocation_result<T*, std::size_t>
allocate_at_least( std::size_t n );
```
_(since C++23)_

## Parameters
- `n`: the lower bound of number of objects to allocate storage for

## Return value
[std::allocation_result](/cpp/memory/allocation_result/)<T*>{p, count}, where p points to the first element of an array of count objects of type T whose elements have not been constructed yet.

## Notes
allocate_at_least is mainly provided for contiguous containers, e.g. [std::vector](/cpp/container/vector/) and [std::basic_string](/cpp/string/basic_string/), in order to reduce reallocation by making their capacity match the actually allocated size when possible.

The "unspecified when and how" wording makes it possible to [combine or optimize away heap allocations](/cpp/language/new/#Allocation) made by the standard library containers, even though such optimizations are disallowed for direct calls to ::[operator new](/cpp/memory/new/operator_new/). For example, this is implemented by libc++ ([[1]](https://github.com/llvm-mirror/libcxx/blob/master@%7B2017-02-09%7D/include/memory#L1766-L1772) and [[2]](https://github.com/llvm-mirror/libcxx/blob/master@%7B2017-02-09%7D/include/new#L211-L217)).

After calling [allocate_at_least](#top) and before construction of elements, pointer arithmetic of T* is well-defined within the allocated array, but the behavior is undefined if elements are accessed.

## Example
```cpp
#include <memory>
#include <print>
 
int main()
{
    const std::size_t count{69};
    std::allocator<int> alloc;
    std::allocation_result res{alloc.allocate_at_least(count)};
    std::print("count: {}\n"
               "res.ptr: {}\n"
               "res.count: {}\n", count, res.ptr, res.count);
 
    /* construct, use, then destroy elements */
 
    alloc.deallocate(res.ptr, res.count);
}
```

## See also
- [allocation_result](/cpp/memory/allocation_result/)
- [allocate_at_least](/cpp/memory/allocator_traits/allocate_at_least/)
