---
title: "std::experimental::pmr::polymorphic_allocator<T>::construct"
source_path: "cpp/experimental/polymorphic_allocator/construct"
category: "experimental"
---

Constructs an object in allocated, but not initialized storage pointed to by p the provided constructor arguments. If the object is of type that itself uses allocators, or if it is std::pair, passes this->resource() down to the constructed object.

## Declarations
```cpp
template< class U, class... Args >
void construct( U* p, Args&&... args );
```
_(library fundamentals TS)_

```cpp
template< class T1, class T2, class... Args1, class... Args2 >
void construct( std::pair<T1, T2>* p,
std::piecewise_construct_t,
std::tuple<Args1...> x,
std::tuple<Args2...> y );
```
_(library fundamentals TS)_

```cpp
template< class T1, class T2 >
void construct( std::pair<T1, T2>* p );
```
_(library fundamentals TS)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, U&& x, V&& y );
```
_(library fundamentals TS)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, const std::pair<U, V>& xy );
```
_(library fundamentals TS)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, std::pair<U, V>&& xy );
```
_(library fundamentals TS)_

## Parameters
- `p`: pointer to allocated, but not initialized storage
- `args...`: the constructor arguments to pass to the constructor of T
- `x`: the constructor arguments to pass to the constructor of T1
- `y`: the constructor arguments to pass to the constructor of T2
- `xy`: the pair whose two members are the constructor arguments for T1 and T2

## Return value
(none)

## Notes
This function is called (through [std::allocator_traits](/cpp/memory/allocator_traits/)) by any allocator-aware object, such as [std::vector](/cpp/container/vector/), that was given a [std::polymorphic_allocator](/cpp/memory/polymorphic_allocator/) as the allocator to use. Since memory_resource* implicitly converts to polymorphic_allocator, the memory resource pointer will propagate to any allocator-aware subobjects using polymorphic allocators.

## See also
- [construct](/cpp/memory/allocator_traits/construct/)
- [construct](/cpp/memory/allocator/construct/)
