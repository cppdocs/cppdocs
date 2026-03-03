---
title: "std::flat_multiset<Key,Compare,KeyContainer>::flat_multiset"
source_path: "cpp/container/flat_multiset/flat_multiset"
category: "container"
since: "C++23"
---

Constructs new container adaptor from a variety of data sources and optionally provided comparison function object comp and/or allocator alloc.

## Declarations
```cpp
flat_multiset()
: flat_multiset(key_compare()) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( const flat_multiset& other, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( flat_multiset&& other, const Allocator& alloc );
```
_(since C++23)_

```cpp
explicit flat_multiset( container_type cont,
const key_compare& comp = key_compare() );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( const container_type& cont, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( const container_type& cont, const key_compare& comp,
const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_multiset( std::sorted_equivalent_t s, container_type cont,
const key_compare& comp = key_compare() )
: c(std::move(cont)), compare(comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( std::sorted_equivalent_t s, const container_type& cont,
const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( std::sorted_equivalent_t s, const container_type& cont,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
explicit flat_multiset( const key_compare& comp )
: c(), compare(comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
explicit flat_multiset( const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter >
flat_multiset( InputIter first, InputIter last,
const key_compare& comp = key_compare() )
: c(), compare(comp);
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_multiset( InputIter first, InputIter last,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_multiset( InputIter first, InputIter last, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
flat_multiset( std::from_range_t, R&& rg, const key_compare& comp )
: flat_multiset(comp);
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
flat_multiset( std::from_range_t fr, R&& rg )
: flat_multiset( fr, std::forward<R>(rg), key_compare() ) { }
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R, class Allocator >
flat_multiset( std::from_range_t, R&& rg, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R, class Allocator >
flat_multiset( std::from_range_t, R&& rg, const key_compare& comp,
const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter >
flat_multiset( std::sorted_equivalent_t s, InputIter first, InputIter last,
const key_compare& comp = key_compare() )
: c(first, last), compare(comp) { }
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_multiset( std::sorted_equivalent_t s, InputIter first, InputIter last,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_multiset( std::sorted_equivalent_t s, InputIter first, InputIter last,
const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_multiset( std::initializer_list<value_type> init,
const key_compare& comp = key_compare() )
: flat_multiset(init.begin(), init.end(), comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( std::initializer_list<value_type> init, const key_compare& comp,
const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( std::initializer_list<value_type> init, const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_multiset( std::sorted_equivalent_t s, std::initializer_list<value_type> init,
const key_compare& comp = key_compare() )
: flat_multiset(s, init.begin(), init.end(), comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( std::sorted_equivalent_t s, std::initializer_list<value_type> init,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_multiset( std::sorted_equivalent_t s, std::initializer_list<value_type> init,
const Allocator& alloc );
```
_(since C++23)_

## Parameters
- `cont`: a container to be used as source to initialize the underlying container
- `other`: another flat_multiset to be used as source to initialize the elements of the underlying container with
- `alloc`: an allocator to use for all memory allocations of the underlying container
- `comp`: a function object to be used for all comparisons of keys
- `first, last`: a range to copy the elements from
- `init`: an initializer list to initialize the elements of the underlying container with
- `rg`: a container compatible range (that is, an input_range whose elements are convertible to value_type) to be used as source to initialize the underlying container
- `fr`: a disambiguation tag that indicates that the contained member should be range constructed
- `s`: a disambiguation tag that indicates that the input sequence is sorted with respect to compare

## Notes
After container move construction (overload (3,16-19)), references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/container/flat_multiset/operator/)
