---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::unordered_multimap"
source_path: "cpp/container/unordered_multimap/unordered_multimap"
category: "container"
since: "C++20"
---

Constructs new container from a variety of data sources. Optionally uses user supplied bucket_count as a minimal number of buckets to create, hash as the hash function, equal as the function to compare keys and alloc as the allocator.

## Declarations
```cpp
unordered_multimap()
: unordered_multimap(size_type(/* unspecified */)) {}
```
_(since C++11) (until C++20)_

```cpp
unordered_multimap();
```
_(since C++20)_

```cpp
explicit unordered_multimap( size_type bucket_count,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
unordered_multimap( size_type bucket_count,
const Allocator& alloc )
: unordered_multimap(bucket_count, Hash(), key_equal(), alloc) {}
```
_(since C++14)_

```cpp
unordered_multimap( size_type bucket_count,
const Hash& hash,
const Allocator& alloc )
: unordered_multimap(bucket_count, hash, key_equal(), alloc) {}
```
_(since C++14)_

```cpp
explicit unordered_multimap( const Allocator& alloc );
```
_(since C++11)_

```cpp
template< class InputIt >
unordered_multimap( InputIt first, InputIt last,
size_type bucket_count = /* unspecified */,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
template< class InputIt >
unordered_multimap( InputIt first, InputIt last,
size_type bucket_count,
const Allocator& alloc )
: unordered_multimap(first, last,
bucket_count, Hash(), key_equal(), alloc) {}
```
_(since C++14)_

```cpp
template< class InputIt >
unordered_multimap( InputIt first, InputIt last,
size_type bucket_count,
const Hash& hash,
const Allocator& alloc )
: unordered_multimap(first, last,
bucket_count, hash, key_equal(), alloc) {}
```
_(since C++14)_

```cpp
unordered_multimap( const unordered_multimap& other );
```
_(since C++11)_

```cpp
unordered_multimap( const unordered_multimap& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
unordered_multimap( unordered_multimap&& other );
```
_(since C++11)_

```cpp
unordered_multimap( unordered_multimap&& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
unordered_multimap( std::initializer_list<value_type> init,
size_type bucket_count = /* unspecified */,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
unordered_multimap( std::initializer_list<value_type> init,
size_type bucket_count,
const Allocator& alloc )
: unordered_multimap(init, bucket_count,
Hash(), key_equal(), alloc) {}
```
_(since C++14)_

```cpp
unordered_multimap( std::initializer_list<value_type> init,
size_type bucket_count,
const Hash& hash,
const Allocator& alloc )
: unordered_multimap(init, bucket_count,
hash, key_equal(), alloc) {}
```
_(since C++14)_

```cpp
template< container-compatible-range<value_type> R >
unordered_multimap( std::from_range_t, R&& rg,
size_type bucket_count = /* see description */,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
unordered_multimap( std::from_range_t, R&& rg,
size_type bucket_count,
const Allocator& alloc )
: unordered_multimap(std::from_range, std::forward<R>(rg),
bucket_count, Hash(), key_equal(), alloc) {}
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
unordered_multimap( std::from_range_t, R&& rg,
size_type bucket_count,
const Hash& hash,
const Alloc& alloc )
: unordered_multimap(std::from_range, std::forward<R>(rg),
bucket_count, hash, key_equal(), alloc) {}
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of this container
- `bucket_count`: minimal number of buckets to use on initialization. If it is not specified, an unspecified default value is used
- `hash`: hash function to use
- `equal`: comparison function to use for all key comparisons of this container
- `first, last`: the range [first, last) to copy the elements from
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to value_type
- `other`: another container to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with

## Notes
Although not formally required until C++23, some implementations have already put the template parameter Allocator into [non-deduced contexts](/cpp/language/template_argument_deduction/#Non-deduced_contexts) in earlier modes.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2193 | C++11 | the default constructor (1) was explicit | made non-explicit |
| LWG 2230 | C++11 | the semantics of overload (13) was not specified | specified |

## See also
- [operator=](/cpp/container/unordered_multimap/operator/)
