---
title: "std::uses_allocator_construction_args"
source_path: "cpp/memory/uses_allocator_construction_args"
header: "<memory>"
category: "memory"
since: "C++20"
---

Prepares the argument list needed to create an object of the given type T by means of [uses-allocator construction](/cpp/memory/uses_allocator/).

## Declarations
```cpp
T is not a specialization of std::pair
```

```cpp
template< class T, class Alloc, class... Args >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
Args&&... args ) noexcept;
```
_(since C++20)_

```cpp
T is a specialization of std::pair
```

```cpp
template< class T, class Alloc, class Tuple1, class Tuple2 >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
std::piecewise_construct_t, Tuple1&& x, Tuple2&& y ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class Alloc >
constexpr auto uses_allocator_construction_args( const Alloc& alloc ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class Alloc, class U, class V >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
U&& u, V&& v ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class Alloc, class U, class V >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
std::pair<U, V>& pr ) noexcept;
```
_(since C++23)_

```cpp
template< class T, class Alloc, class U, class V >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
const std::pair<U, V>& pr ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class Alloc, class U, class V >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
std::pair<U, V>&& pr ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class Alloc, class U, class V >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
const std::pair<U, V>&& pr ) noexcept;
```
_(since C++23)_

```cpp
template< class T, class Alloc, class NonPair >
constexpr auto uses_allocator_construction_args( const Alloc& alloc,
NonPair&& non_pair ) noexcept;
```
_(since C++20)_

## Parameters
- `alloc`: the allocator to use
- `args`: the arguments to pass to T's constructor
- `x`: tuple of arguments to pass to the constructors of T's first data member
- `y`: tuple of arguments to pass to the constructors of T's second data member
- `u`: single argument to pass to the constructor of T's first data member
- `v`: single argument to pass to the constructor of T's second data member
- `pr`: a pair whose first data member will be passed to the constructor of T's first data member and second data member will be passed to the constructor of T's second data member
- `non_pair`: single argument to convert to a std::pair for further construction

## Return value
[std::tuple](/cpp/utility/tuple/) of arguments suitable for passing to the constructor of T.

## Notes
The overloads (2-9) provide allocator propagation into [std::pair](/cpp/utility/pair/), which supports neither leading-allocator nor trailing-allocator calling conventions (unlike, e.g. [std::tuple](/cpp/utility/tuple/), which uses leading-allocator convention).

When used in uses-allocator construction, the conversion function of pair-constructor converts the provided argument to [std::pair](/cpp/utility/pair/) at first, and then constructs the result from that [std::pair](/cpp/utility/pair/) by uses-allocator construction.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3525 | C++20 | no overload could handle non-pair types convertible to pair | reconstructing overload added |

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
- [make_obj_using_allocator](/cpp/memory/make_obj_using_allocator/)
- [uninitialized_construct_using_allocator](/cpp/memory/uninitialized_construct_using_allocator/)
