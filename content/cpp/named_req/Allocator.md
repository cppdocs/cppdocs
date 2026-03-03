---
title: "C++ named requirements: Allocator"
source_path: "cpp/named_req/Allocator"
category: "named_req"
---

Encapsulates strategies for access/addressing, allocation/deallocation and construction/destruction of objects.

## Declarations
```cpp
template<class Alloc>
concept /*simple-allocator*/ = requires(Alloc alloc, std::size_t n)
{
{ *alloc.allocate(n) } -> std::same_as<typename Alloc::value_type&>;
{ alloc.deallocate(alloc.allocate(n), n) };
} && std::copy_constructible<Alloc>
&& std::equality_comparable<Alloc>;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 179 | C++98 | pointer and const_pointer were notrequired to be comparable with each other | required |
| LWG 199 | C++98 | the return value of a.allocate(0) was unclear | it is unspecified |
| LWG 258(N2436) | C++98 | the equality relationship between allocators werenot required to be reflexive, symmetric or transitive | required to be reflexive,symmetric and transitive |
| LWG 274 | C++98 | T could be a const-qualified type or reference type,making std::allocator possibly ill-formed[1] | prohibited these types |
| LWG 2016 | C++11 | the copy, move and swap operations ofallocator might be throwing when used | required to be non-throwing |
| LWG 2081 | C++98C++11 | allocators were not required to support copyassignment (C++98) and move assignment (C++11) | required |
| LWG 2108 | C++11 | there was no way to show an allocator is stateless | is_always_equal provided |
| LWG 2263 | C++11 | the resolution of LWG issue 179 was accidently dropped in C++11and not generalized to void_pointer and const_void_pointer | restored and generalized |
| LWG 2447 | C++11 | T could be a volatile-qualified object type | prohibited these types |
| LWG 2593 | C++11 | moving from an allocator might modify its value | modification forbidden |
| P0593R6 | C++98 | allocate were not required to create anarray object in the storage it allocated | required |
