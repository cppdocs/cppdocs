---
title: "operator new, operator new[]"
source_path: "cpp/memory/new/operator"
header: "<new>"
category: "memory"
since: "C++17"
aliases:
  - "/cpp/memory/new/operator/"
---

Attempts to allocate requested number of bytes, and the allocation request can fail (even if the requested number of bytes is zero). These allocation functions are called by [new expressions](/cpp/language/new/) to allocate memory in which new object would then be initialized. They may also be called using regular function call syntax.

## Declarations
```cpp
Replaceable allocation functions
```

```cpp
void* operator new ( std::size_t count );
```

```cpp
void* operator new[]( std::size_t count );
```

```cpp
void* operator new ( std::size_t count, std::align_val_t al );
```
_(since C++17)_

```cpp
void* operator new[]( std::size_t count, std::align_val_t al );
```
_(since C++17)_

```cpp
Replaceable non-throwing allocation functions
```

```cpp
void* operator new ( std::size_t count, const std::nothrow_t& tag );
```
_(noexcept since C++11)_

```cpp
void* operator new[]( std::size_t count, const std::nothrow_t& tag );
```
_(noexcept since C++11)_

```cpp
void* operator new ( std::size_t count, std::align_val_t al,
const std::nothrow_t& tag ) noexcept;
```
_(since C++17)_

```cpp
void* operator new[]( std::size_t count, std::align_val_t al,
const std::nothrow_t& tag ) noexcept;
```
_(since C++17)_

```cpp
Non-allocating placement allocation functions
```

```cpp
void* operator new ( std::size_t count, void* ptr );
```
_(noexcept since C++11) (constexpr since C++26)_

```cpp
void* operator new[]( std::size_t count, void* ptr );
```
_(noexcept since C++11) (constexpr since C++26)_

```cpp
User-defined placement allocation functions
```

```cpp
void* operator new ( std::size_t count, /* args... */ );
```

```cpp
void* operator new[]( std::size_t count, /* args... */ );
```

```cpp
void* operator new ( std::size_t count,
std::align_val_t al, /* args... */ );
```
_(since C++17)_

```cpp
void* operator new[]( std::size_t count,
std::align_val_t al, /* args... */ );
```
_(since C++17)_

```cpp
Class-specific allocation functions
```

```cpp
void* T::operator new ( std::size_t count );
```

```cpp
void* T::operator new[]( std::size_t count );
```

```cpp
void* T::operator new ( std::size_t count, std::align_val_t al );
```
_(since C++17)_

```cpp
void* T::operator new[]( std::size_t count, std::align_val_t al );
```
_(since C++17)_

```cpp
Class-specific placement allocation functions
```

```cpp
void* T::operator new ( std::size_t count, /* args... */ );
```

```cpp
void* T::operator new[]( std::size_t count, /* args... */ );
```

```cpp
void* T::operator new ( std::size_t count,
std::align_val_t al, /* args... */ );
```
_(since C++17)_

```cpp
void* T::operator new[]( std::size_t count,
std::align_val_t al, /* args... */ );
```
_(since C++17)_

## Parameters
- `count`: number of bytes to allocate
- `ptr`: pointer to a memory area to initialize the object at
- `tag`: disambiguation tag used to select non-throwing overloads
- `al`: alignment to use, invalid value leads to undefined behavior

## Notes
Even though the non-allocating placement new ([9,10](/cpp/memory/new/operator_new/#Version_9)) cannot be replaced, a function with the same signature may be defined at class scope as described above. In addition, global overloads that look like placement new but take a non-void pointer type as the second argument are allowed, so the code that wants to ensure that the true placement new is called (e.g. [std::allocator::construct](/cpp/memory/allocator/construct/)), must use ::new and also cast the pointer to void*.

If the behavior of a deallocation function does not satisfy the default constraints, the behavior is undefined.

The following functions are required to be thread-safe:

Calls to these functions that allocate or deallocate a particular unit of storage occur in a single total order, and each such deallocation call [happens-before](/cpp/atomic/memory_order/) the next allocation (if any) in this order.

It is unspecified whether library versions of operator new make any calls to [std::malloc](/cpp/memory/c/malloc/)or [std::aligned_alloc](/cpp/memory/c/aligned_alloc/)(since C++17).

For loading a large file, file mapping via OS-specific functions, e.g., [mmap](https://pubs.opengroup.org/onlinepubs/9799919799/functions/mmap.html) on POSIX or CreateFileMapping([A](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-createfilemappinga)/[W](https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-createfilemappingw)) along with [MapViewOfFile](https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-mapviewoffile) on Windows, is preferable to allocating a buffer for file reading.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 521 | C++98 | any class derived from std::bad_alloc could be thrown,even if the std::bad_alloc base is ambiguous or inaccessible | the exception thrown should matcha handler of type std::bad_alloc |
| LWG 9 | C++98 | multiple calls for allocating zerobytes could yield the same pointer | only allowed if all such previouslyyielded pointers have beenpassed to deallocation functions |
| LWG 206 | C++98 | replacing the replaceable allocation functions didnot affect the default behaviors of the correspondingreplaceable non-throwing allocation functions | the default behaviorschange accordingly |
| LWG 404 | C++98 | replacements of the replaceable allocationfunctions could be declared inline | prohibited, no diagnostic required |

## See also
- [operator new](/cpp/coroutine/generator/promise_type/operator_new/)
- [operator deleteoperator delete[]](/cpp/memory/new/operator_delete/)
- [get_new_handler](/cpp/memory/new/get_new_handler/)
- [set_new_handler](/cpp/memory/new/set_new_handler/)
- [get_temporary_buffer](/cpp/memory/get_temporary_buffer/)
- [malloc](/cpp/memory/c/malloc/)
- [aligned_alloc](/cpp/memory/c/aligned_alloc/)
