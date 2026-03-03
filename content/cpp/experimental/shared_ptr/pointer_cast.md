---
title: "std::experimental::static_pointer_cast, std::experimental::dynamic_pointer_cast, std::experimental::const_pointer_cast, std::experimental::reinterpret_pointer_cast"
source_path: "cpp/experimental/shared_ptr/pointer_cast"
category: "experimental"
---

Creates a new instance of std::experimental::shared_ptr whose stored pointer is obtained from r's stored pointer using a cast expression. If r is empty, so is the new shared_ptr (but its stored pointer is not necessarily null).

## Declarations
```cpp
template< class T, class U >
std::experimental::shared_ptr<T>
static_pointer_cast( const std::experimental::shared_ptr<U>& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T, class U >
std::experimental::shared_ptr<T>
dynamic_pointer_cast( const std::experimental::shared_ptr<U>& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T, class U >
std::experimental::shared_ptr<T>
const_pointer_cast( const std::experimental::shared_ptr<U>& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class T, class U >
std::experimental::shared_ptr<T>
reinterpret_pointer_cast( const std::experimental::shared_ptr<U>& r ) noexcept;
```
_(library fundamentals TS)_

## Parameters
- `r`: the pointer to convert

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/experimental/shared_ptr/shared_ptr/)
- [static_pointer_castdynamic_pointer_castconst_pointer_castreinterpret_pointer_cast](/cpp/memory/shared_ptr/pointer_cast/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
