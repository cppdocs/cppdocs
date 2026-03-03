---
title: "std::pmr::polymorphic_allocator<T>::construct"
source_path: "cpp/memory/polymorphic_allocator/construct"
category: "memory"
since: "C++17"
---

Constructs an object in allocated, but not initialized storage pointed to by p the provided constructor arguments. If the object is of type that itself uses allocators, or if it is std::pair, passes *this down to the constructed object.

## Declarations
```cpp
template< class U, class... Args >
void construct( U* p, Args&&... args );
```
_(since C++17)_

```cpp
template< class T1, class T2, class... Args1, class... Args2 >
void construct( std::pair<T1, T2>* p,
std::piecewise_construct_t,
std::tuple<Args1...> x,
std::tuple<Args2...> y );
```
_(since C++17) (until C++20)_

```cpp
template< class T1, class T2 >
void construct( std::pair<T1, T2>* p );
```
_(since C++17) (until C++20)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, U&& x, V&& y );
```
_(since C++17) (until C++20)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, const std::pair<U, V>& xy );
```
_(since C++17) (until C++20)_

```cpp
template< class T1, class T2, class U, class V >
void construct( std::pair<T1, T2>* p, std::pair<U, V>&& xy );
```
_(since C++17) (until C++20)_

```cpp
template< class T1, class T2, class NonPair >
void construct( std::pair<T1, T2>* p, NonPair&& non_pair );
```
_(since C++17) (until C++20)_

## Parameters
- `p`: pointer to allocated, but not initialized storage
- `args...`: the constructor arguments to pass to the constructor of T
- `x`: the constructor arguments to pass to the constructor of T1
- `y`: the constructor arguments to pass to the constructor of T2
- `xy`: the pair whose two members are the constructor arguments for T1 and T2
- `non_pair`: non-pair argument to convert to pair for further construction

## Return value
(none)

## Notes
This function is called (through [std::allocator_traits](/cpp/memory/allocator_traits/)) by any allocator-aware object, such as [std::pmr::vector](/cpp/container/vector/) (or another [std::vector](/cpp/container/vector/) that was given a std::pmr::polymorphic_allocator as the allocator to use).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2969 | C++17 | uses-allocator construction passed resource() | passes *this |
| LWG 2975 | C++17 | first overload is mistakenly used for pair construction in some cases | constrained to not accept pairs |
| LWG 3525 | C++17 | no overload could handle non-pair types convertible to pair | reconstructing overload added |

## See also
- [construct](/cpp/memory/allocator_traits/construct/)
- [construct](/cpp/memory/allocator/construct/)
