---
title: "operator delete, operator delete[]"
source_path: "cpp/memory/new/operator"
header: "<new>"
category: "memory"
since: "C++11"
---

Deallocates storage previously allocated by a matching [operator new](/cpp/memory/new/operator_new/). These deallocation functions are called by [delete-expressions](/cpp/language/delete/) and by [new-expressions](/cpp/language/new/) to deallocate memory after destructing (or failing to construct) objects with dynamic storage duration. They may also be called using regular function call syntax.

## Declarations
```cpp
replaceable usual deallocation functions
```

```cpp
void operator delete ( void* ptr ) throw();
```
_(until C++11)_

```cpp
void operator delete ( void* ptr ) noexcept;
```
_(since C++11)_

```cpp
void operator delete[]( void* ptr ) throw();
```
_(until C++11)_

```cpp
void operator delete[]( void* ptr ) noexcept;
```
_(since C++11)_

```cpp
void operator delete ( void* ptr, std::align_val_t al ) noexcept;
```
_(since C++17)_

```cpp
void operator delete[]( void* ptr, std::align_val_t al ) noexcept;
```
_(since C++17)_

```cpp
void operator delete ( void* ptr, std::size_t sz ) noexcept;
```
_(since C++14)_

```cpp
void operator delete[]( void* ptr, std::size_t sz ) noexcept;
```
_(since C++14)_

```cpp
void operator delete ( void* ptr, std::size_t sz,
std::align_val_t al ) noexcept;
```
_(since C++17)_

```cpp
void operator delete[]( void* ptr, std::size_t sz,
std::align_val_t al ) noexcept;
```
_(since C++17)_

```cpp
replaceable placement deallocation functions
```

```cpp
void operator delete ( void* ptr, const std::nothrow_t& tag ) throw();
```
_(until C++11)_

```cpp
void operator delete ( void* ptr, const std::nothrow_t& tag ) noexcept;
```
_(since C++11)_

```cpp
void operator delete[]( void* ptr, const std::nothrow_t& tag ) throw();
```
_(until C++11)_

```cpp
void operator delete[]( void* ptr, const std::nothrow_t& tag ) noexcept;
```
_(since C++11)_

```cpp
void operator delete ( void* ptr, std::align_val_t al,
const std::nothrow_t& tag ) noexcept;
```
_(since C++17)_

```cpp
void operator delete[]( void* ptr, std::align_val_t al,
const std::nothrow_t& tag ) noexcept;
```
_(since C++17)_

```cpp
non-allocating placement deallocation functions
```

```cpp
void operator delete ( void* ptr, void* place ) throw();
```
_(until C++11)_

```cpp
void operator delete ( void* ptr, void* place ) noexcept;
```
_(since C++11)_

```cpp
void operator delete[]( void* ptr, void* place ) throw();
```
_(until C++11)_

```cpp
void operator delete[]( void* ptr, void* place ) noexcept;
```
_(since C++11)_

```cpp
user-defined placement deallocation functions
```

```cpp
void operator delete ( void* ptr, args... );
```

```cpp
void operator delete[]( void* ptr, args... );
```

```cpp
class-specific usual deallocation functions
```

```cpp
void T::operator delete ( void* ptr );
```

```cpp
void T::operator delete[]( void* ptr );
```

```cpp
void T::operator delete ( void* ptr, std::align_val_t al );
```
_(since C++17)_

```cpp
void T::operator delete[]( void* ptr, std::align_val_t al );
```
_(since C++17)_

```cpp
void T::operator delete ( void* ptr, std::size_t sz );
```

```cpp
void T::operator delete[]( void* ptr, std::size_t sz );
```

```cpp
void T::operator delete ( void* ptr, std::size_t sz, std::align_val_t al );
```
_(since C++17)_

```cpp
void T::operator delete[]( void* ptr, std::size_t sz, std::align_val_t al );
```
_(since C++17)_

```cpp
class-specific placement deallocation functions
```

```cpp
void T::operator delete ( void* ptr, args... );
```

```cpp
void T::operator delete[]( void* ptr, args... );
```

```cpp
class-specific usual destroying deallocation functions
```

```cpp
void T::operator delete( T* ptr, std::destroying_delete_t );
```
_(since C++20)_

```cpp
void T::operator delete( T* ptr, std::destroying_delete_t,
std::align_val_t al );
```
_(since C++20)_

```cpp
void T::operator delete( T* ptr, std::destroying_delete_t, std::size_t sz );
```
_(since C++20)_

```cpp
void T::operator delete( T* ptr, std::destroying_delete_t,
std::size_t sz, std::align_val_t al );
```
_(since C++20)_

## Parameters
- `ptr`: pointer to a memory block to deallocate or a null pointer
- `sz`: the size that was passed to the matching allocation function
- `place`: pointer used as the placement parameter in the matching placement new
- `tag`: overload disambiguation tag matching the tag used by non-throwing operator new
- `al`: alignment of the object or array element that was allocated
- `args`: arbitrary parameters matching a placement allocation function (may include std::size_t and std::align_val_t)

## Return value
(none)

## Notes
The call to the class-specific T::operator delete on a polymorphic class is the only case where a static member function is called through dynamic dispatch.

If the behavior of a deallocation function does not satisfy the default constraints, the behavior is undefined.

The following functions are required to be thread-safe:

Calls to these functions that allocate or deallocate a particular unit of storage occur in a single total order, and each such deallocation call [happens-before](/cpp/atomic/memory_order/) the next allocation (if any) in this order.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 220 | C++98 | user-defined deallocation functions were permitted to throw | throwing from a deallocation functionresults in undefined behavior |
| CWG 1438 | C++98 | any use of an invalid pointer value was undefined behavior | only indirection and deallocation are |
| LWG 206 | C++98 | replacing (2) did not affect the default behavior of (10) | the default behavior changes accordingly |
| LWG 298 | C++98 | replacing (1) did not affect the default behavior of (9) | the default behavior changes accordingly |
| LWG 404 | C++98 | replacements of the replaceable deallocationfunctions could be declared inline | prohibited, no diagnostic required |
| LWG 2458 | C++14 | overloads taking (void*, std::size_t, conststd::nothrow_t&) were specified, but could never be called | removed spurious overloads |

## See also
- [operator delete](/cpp/coroutine/generator/promise_type/operator_delete/)
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [return_temporary_buffer](/cpp/memory/return_temporary_buffer/)
- [free](/cpp/memory/c/free/)
