---
title: "std::multiset<Key,Compare,Allocator>::multiset"
source_path: "cpp/container/multiset/multiset"
category: "container"
since: "C++11"
---

Constructs new container from a variety of data sources and optionally using user supplied allocator alloc or comparison function object comp.

## Declarations
```cpp
multiset();
```
_(until C++11)_

```cpp
multiset()
: multiset(Compare()) {}
```
_(since C++11)_

```cpp
explicit multiset( const Compare& comp,
const Allocator& alloc = Allocator() );
```

```cpp
explicit multiset( const Allocator& alloc );
```
_(since C++11)_

```cpp
template< class InputIt >
multiset( InputIt first, InputIt last,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```

```cpp
template< class InputIt >
multiset( InputIt first, InputIt last,
const Allocator& alloc )
: multiset(first, last, Compare(), alloc) {}
```
_(since C++14)_

```cpp
multiset( const multiset& other );
```

```cpp
multiset( const multiset& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
multiset( multiset&& other );
```
_(since C++11)_

```cpp
multiset( multiset&& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
multiset( std::initializer_list<value_type> init,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
multiset( std::initializer_list<value_type> init,
const Allocator& alloc )
: multiset(init, Compare(), alloc) {}
```
_(since C++14)_

```cpp
template< container-compatible-range<value_type> R >
multiset( std::from_range_t, R&& rg,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
multiset( std::from_range_t, R&& rg,
const Allocator& alloc )
: multiset(std::from_range, std::forward<R>(rg), Compare(), alloc) {}
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of this container
- `comp`: comparison function object to use for all comparisons of keys
- `first, last`: the range to copy the elements from
- `other`: another container to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to value_type

## Notes
After container move construction (overload (8,9)), references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

Although not formally required until C++23, some implementations has already put the template parameter Allocator into [non-deduced contexts](/cpp/language/template_argument_deduction/#Non-deduced_contexts) in earlier modes.

## Example
```cpp
#include <iostream>
#include <set>
#include <string_view>
 
template <typename T>
void println(const std::string_view name, const std::multiset<T>& ms)
{
    std::cout << name << ": ";
    for (const auto& element : ms)
        std::cout << element << ' ';
    std::cout << '\n';
}
 
int main()
{
    // (1) Default constructor
    std::multiset<int> a;
    a.insert(4);
    a.insert(3);
    a.insert(2);
    a.insert(1);
    println("a", a);
 
    // (4) Range constructor
    std::multiset<int> b(a.begin(), a.find(3));
    println("b", b);
 
    // (6) Copy constructor
    std::multiset<int> c(a);
    println("c", c);
 
    // (8) Move constructor
    std::multiset<int> d(std::move(a));
    println("d", d);
 
    // (10) Initializer list constructor
    std::multiset<int> e{3, 2, 1, 2, 4, 7, 3};
    println("e", e);
 
    // (12) Range constructor
    const auto w = {"α", "β", "γ", "δ", "δ", "γ", "β", "α"};
#if __cpp_lib_containers_ranges
    std::multiset<std::string> f(std::from_range, w); // overload (12)
#else
    std::multiset<std::string> f(w.begin(), w.end()); // fallback to (4)
#endif
    println("f", f);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2076 | C++11 | overload (4) conditionally required Key to be CopyInsertable into *this | not required |
| LWG 2193 | C++11 | the default constructor was explicit | made non-explicit |

## See also
- [operator=](/cpp/container/multiset/operator/)
