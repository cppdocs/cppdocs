---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::construct"
source_path: "cpp/memory/scoped_allocator_adaptor/construct"
header: "<scoped_allocator>"
category: "memory"
---

Constructs an object in allocated, but not initialized storage pointed to by p using the outer allocator and the provided constructor arguments. If the object is of a type that itself uses allocators, or if it is [std::pair](/cpp/utility/pair/)(until C++20), passes the inner allocator down to the constructed object.

## Declarations
```cpp
template< class T, class... Args >
void construct( T* p, Args&&... args );
```

```cpp
template< class T1, class T2, class... Args1, class... Args2 >
void construct( std::pair<T1, T2>* p, std::piecewise_construct_t,
std::tuple<Args1...> x, std::tuple<Args2...> y );
```
_(until C++20)_

```cpp
template< class T1, class T2 >
void construct( std::pair<T1, T2>* p );
```
_(until C++20)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, U&& x, V&& y );
```
_(until C++20)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, const std::pair<U, V>& xy );
```
_(until C++20)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, std::pair<U, V>&& xy );
```
_(until C++20)_

```cpp
Helper function templates
```

```cpp
template < class T, class... Args >
std::tuple</* see below */> /*concat-args*/( std::tuple<Args...>&& tup );
```
_(exposition only*) (until C++20)_

## Parameters
- `p`: pointer to allocated, but not initialized storage
- `args`: the constructor arguments to pass to the constructor of T
- `x`: the constructor arguments to pass to the constructor of T1
- `y`: the constructor arguments to pass to the constructor of T2
- `xy`: the pair whose two members are the constructor arguments for T1 and T2
- `tup`: the arguments to be merged

## Notes
This function is called (through [std::allocator_traits](/cpp/memory/allocator_traits/)) by any allocator-aware object, such as [std::vector](/cpp/container/vector/), that was given a [std::scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/) as the allocator to use. Since inner_allocator_type is itself a specialization of [std::scoped_allocator_adaptor](/cpp/memory/scoped_allocator_adaptor/), this function will also be called when the allocator-aware objects constructed through this function start constructing their own members.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2203 | C++11 | inner allocators were obtained by value-initializingan inner_allocator_type object | obtained by calling inner_allocator() |
| LWG 2511(P0475R1) | C++11 | concat-args might copy elements of std::tuples | eliminated all element copy operations |
| LWG 2586 | C++11 | only constructions frominner_allocator_type rvalues were checked | checks constructions from non-constinner_allocator_type lvalues instead |
| LWG 2975 | C++11 | overload (1) was not constrained | constrained to refuse std::pair |

## See also
- [construct](/cpp/memory/allocator_traits/construct/)
- [construct](/cpp/memory/allocator/construct/)
