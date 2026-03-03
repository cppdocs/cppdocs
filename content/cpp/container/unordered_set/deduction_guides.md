---
title: "deduction guides for std::unordered_set"
source_path: "cpp/container/unordered_set/deduction_guides"
header: "<unordered_set>"
category: "container"
since: "C++17"
---

1-6) These [deduction guides](/cpp/language/ctad/) are provided for unordered_set to allow deduction from an iterator range (overloads (1,3,4)) and [std::initializer_list](/cpp/utility/initializer_list/) (overloads (2,5,6)). This overload participates in overload resolution only if InputIt satisfies [LegacyInputIterator](/cpp/named_req/inputiterator/), Alloc satisfies [Allocator](/cpp/named_req/allocator/), neither Hash nor Pred satisfy [Allocator](/cpp/named_req/allocator/), Hash is not an integral type.

## Declarations
```cpp
template<
class InputIt,
class Hash = std::hash<typename std::iterator_traits<InputIt>::value_type>,
class Pred = std::equal_to<typename std::iterator_traits<InputIt>::value_type>,
class Alloc = std::allocator<typename std::iterator_traits<InputIt>::value_type> >
unordered_set( InputIt, InputIt,
typename /* see below */::size_type = /* see below */,
Hash = Hash(), Pred = Pred(), Alloc = Alloc() )
-> unordered_set<typename std::iterator_traits<InputIt>::value_type,
Hash, Pred, Alloc>;
```
_(since C++17)_

```cpp
template< class T,
class Hash = std::hash<T>,
class Pred = std::equal_to<T>,
class Alloc = std::allocator<T> >
unordered_set( std::initializer_list<T>,
typename /* see below */::size_type = /* see below */,
Hash = Hash(), Pred = Pred(), Alloc = Alloc() )
-> unordered_set<T, Hash, Pred, Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Alloc >
unordered_set( InputIt, InputIt, typename /* see below */::size_type, Alloc )
-> unordered_set<typename std::iterator_traits<InputIt>::value_type,
std::hash<typename std::iterator_traits<InputIt>::value_type>,
std::equal_to<typename std::iterator_traits<InputIt>::value_type>,
Alloc>;
```
_(since C++17)_

```cpp
template< class InputIt, class Hash, class Alloc >
unordered_set( InputIt, InputIt, typename /* see below */::size_type, Hash, Alloc )
-> unordered_set<typename std::iterator_traits<InputIt>::value_type, Hash,
std::equal_to<typename std::iterator_traits<InputIt>::value_type>,
Alloc>;
```
_(since C++17)_

```cpp
template< class T, class Alloc >
unordered_set( std::initializer_list<T>, typename /* see below */::size_type, Alloc )
-> unordered_set<T, std::hash<T>, std::equal_to<T>, Alloc>;
```
_(since C++17)_

```cpp
template< class T, class Hash, class Alloc >
unordered_set( std::initializer_list<T>, typename /* see below */::size_type,
Hash, Alloc )
-> unordered_set<T, Hash, std::equal_to<T>, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R,
class Hash = std::hash<ranges::range_value_t<R>>,
class Pred = std::equal_to<ranges::range_value_t<R>>,
class Alloc = std::allocator<ranges::range_value_t<R>> >
unordered_set( std::from_range_t, R&&,
typename /* see below */::size_type = /* see below */,
Hash = Hash(), Pred = Pred(), Alloc = Alloc() )
-> unordered_set<ranges::range_value_t<R>, Hash, Pred, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
unordered_set( std::from_range_t, R&&,
typename /* see below */::size_type, Alloc )
-> unordered_set<ranges::range_value_t<R>, hash<ranges::range_value_t<R>>,
std::equal_to<ranges::range_value_t<R>>, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Alloc >
unordered_set( std::from_range_t, R&&, Alloc )
-> unordered_set<ranges::range_value_t<R>, hash<ranges::range_value_t<R>>,
std::equal_to<ranges::range_value_t<R>>, Alloc>;
```
_(since C++23)_

```cpp
template< ranges::input_range R, class Hash, class Alloc >
unordered_set( std::from_range_t, R&&,
typename /* see below */::size_type, Hash, Alloc )
-> unordered_set<ranges::range_value_t<R>, Hash,
std::equal_to<ranges::range_value_t<R>>, Alloc>;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion; overloads (7-10)

## Example
```cpp
#include <unordered_set>
 
int main()
{
    // guide #2 deduces std::unordered_set<int>
    std::unordered_set s = {1, 2, 3, 4};
 
    // guide #1 deduces std::unordered_set<int>
    std::unordered_set s2(s.begin(), s.end());
}
```
