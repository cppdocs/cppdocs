---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::flat_map"
source_path: "cpp/container/flat_map/flat_map"
category: "container"
since: "C++23"
---

Constructs new container adaptor from a variety of data sources and optionally using user supplied comparison function object comp and/or allocator alloc.

## Declarations
```cpp
flat_map()
: flat_map(key_compare()) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( const flat_map&, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( flat_map&&, const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_map( key_container_type key_cont, mapped_container_type mapped_cont,
const key_compare& comp = key_compare() );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( const key_container_type& key_cont,
const mapped_container_type& mapped_cont,
const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( const key_container_type& key_cont,
const mapped_container_type& mapped_cont,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_map( std::sorted_unique_t, key_container_type key_cont,
mapped_container_type mapped_cont,
const key_compare& comp = key_compare() );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( std::sorted_unique_t, const key_container_type& key_cont,
const mapped_container_type& mapped_cont, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( std::sorted_unique_t, const key_container_type& key_cont,
const mapped_container_type& mapped_cont,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
explicit flat_map( const key_compare& comp )
: c(), compare(comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
explicit flat_map( const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter >
flat_map( InputIter first, InputIter last,
const key_compare& comp = key_compare() )
: c(), compare(comp);
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_map( InputIter first, InputIter last,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_map( InputIter first, InputIter last, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
flat_map( std::from_range_t, R&& rg, const key_compare& comp )
: flat_map(comp);
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
flat_map( std::from_range_t fr, R&& rg )
: flat_map(fr, std::forward<R>(rg), key_compare()) { }
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R, class Allocator >
flat_map( std::from_range_t, R&& rg, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R, class Allocator >
flat_map( std::from_range_t, R&& rg, const key_compare& comp,
const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter >
flat_map( std::sorted_unique_t s, InputIter first, InputIter last,
const key_compare& comp = key_compare() )
: c(), compare(comp);
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_map( std::sorted_unique_t s, InputIter first, InputIter last,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class InputIter, class Allocator >
flat_map( std::sorted_unique_t s, InputIter first, InputIter last,
const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_map( std::initializer_list<value_type> init,
const key_compare& comp = key_compare() )
: flat_map(init.begin(), init.end(), comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( std::initializer_list<value_type> init, const key_compare& comp,
const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( std::initializer_list<value_type> init, const Allocator& alloc );
```
_(since C++23)_

```cpp
flat_map( std::sorted_unique_t s, std::initializer_list<value_type> init,
const key_compare& comp = key_compare() )
: flat_map(s, init.begin(), init.end(), comp) { }
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( std::sorted_unique_t s, std::initializer_list<value_type> init,
const key_compare& comp, const Allocator& alloc );
```
_(since C++23)_

```cpp
template< class Allocator >
flat_map( std::sorted_unique_t s, std::initializer_list<value_type> init,
const Allocator& alloc );
```
_(since C++23)_

## Parameters
- `key_cont`: a container to be used as source to initialize the underlying keys container
- `mapped_cont`: a container to be used as source to initialize the underlying values container
- `other`: another flat_map to be used as source to initialize the elements of the underlying containers with
- `alloc`: an allocator to use for all memory allocations of the underlying containers
- `comp`: a function object to be used for all comparisons of keys
- `first, last`: a range to copy the elements from
- `init`: an initializer list to initialize the elements of the underlying containers with
- `rg`: a container compatible range (that is, an input_range whose elements are convertible to value_type) to be used as source to initialize the underlying containers
- `fr`: a disambiguation tag that indicates that the contained member should be range constructed
- `s`: a disambiguation tag that indicates that the input sequence is sorted with respect to value_comp() and all its elements are unique

## Notes
After container move construction (overload (3)), references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/container/flat_map/operator/)
