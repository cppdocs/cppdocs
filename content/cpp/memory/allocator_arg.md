---
title: "std::allocator_arg, std::allocator_arg_t"
source_path: "cpp/memory/allocator_arg"
header: "<memory>"
category: "memory"
since: "C++11"
---

1) std::allocator_arg_t is an empty class type used to disambiguate the overloads of constructors and member functions of allocator-aware objects, including [std::tuple](/cpp/utility/tuple/), [std::function](/cpp/utility/functional/function/), [std::packaged_task](/cpp/thread/packaged_task/),(until C++17) and [std::promise](/cpp/thread/promise/).

## Declarations
```cpp
struct allocator_arg_t { explicit allocator_arg_t() = default; };
```
_(since C++11)_

```cpp
constexpr std::allocator_arg_t allocator_arg {};
```
_(since C++11) (inline since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2510 | C++11 | the default constructor was non-explicit, which could lead to ambiguity | made explicit |

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
