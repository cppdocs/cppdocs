---
title: "C++ named requirements: AllocatorAwareContainer (since C++11)"
source_path: "cpp/named_req/AllocatorAwareContainer"
category: "named_req"
since: "C++11"
---

An AllocatorAwareContainer is a [Container](/cpp/named_req/container/) that holds an instance of an [Allocator](/cpp/named_req/allocator/) and uses that instance in all its member functions to allocate and deallocate memory and to construct and destroy objects in that memory (such objects may be container elements, nodes, or, for unordered containers, bucket arrays), except that [std::basic_string](/cpp/string/basic_string/) specializations do not use the allocators for construction/destruction of their elements(since C++23).

## Notes
AllocatorAwareContainers always call [std::allocator_traits](/cpp/memory/allocator_traits/)<A>::construct(m, p, args) to construct an object of type T at p using args, with m == get_allocator(). The default construct in [std::allocator](/cpp/memory/allocator/) calls ::new((void*)p) T(args)(until C++20)[std::allocator](/cpp/memory/allocator/) has no construct member and [std::construct_at](/cpp/memory/construct_at/)(p, args) is called when constructing elements(since C++20), but specialized allocators may choose a different definition.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2839 | C++11 | self move assignment of standard containers was not allowed | allowed but the result is unspecified |
