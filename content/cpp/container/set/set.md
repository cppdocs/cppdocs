---
title: "std::set<Key,Compare,Allocator>::set"
source_path: "cpp/container/set/set"
category: "container"
since: "C++11"
---

Constructs new container from a variety of data sources and optionally using user supplied allocator alloc or comparison function object comp.

## Declarations
```cpp
set();
```
_(until C++11)_

```cpp
set()
: set(Compare()) {}
```
_(since C++11)_

```cpp
explicit set( const Compare& comp,
const Allocator& alloc = Allocator() );
```

```cpp
explicit set( const Allocator& alloc );
```
_(since C++11)_

```cpp
template< class InputIt >
set( InputIt first, InputIt last,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```

```cpp
template< class InputIt >
set( InputIt first, InputIt last,
const Allocator& alloc )
: set(first, last, Compare(), alloc) {}
```
_(since C++14)_

```cpp
set( const set& other );
```

```cpp
set( const set& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
set( set&& other );
```
_(since C++11)_

```cpp
set( set&& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
set( std::initializer_list<value_type> init,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
set( std::initializer_list<value_type> init,
const Allocator& alloc )
: set(init, Compare(), alloc) {}
```
_(since C++14)_

```cpp
template< container-compatible-range<value_type> R >
set( std::from_range_t, R&& rg,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
set( std::from_range_t, R&& rg,
const Allocator& alloc )
: set(std::from_range, std::forward<R>(rg), Compare(), alloc) {}
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
#include <cmath>
#include <iostream>
#include <set>
#include <string>
 
struct Point { double x, y; };
 
struct PointCmp
{
    bool operator()(const Point& lhs, const Point& rhs) const
    {
        return std::hypot(lhs.x, lhs.y) < std::hypot(rhs.x, rhs.y);
    }
};
 
std::ostream& operator<<(std::ostream& os, Point pt)
{
    return os << '(' << pt.x << ',' << pt.y << ')';
}
 
void println(auto rem, const auto& seq)
{
    std::cout << rem << '{';
    for (auto n{seq.size()}; const auto& elm : seq)
        std::cout << elm << (--n ? ", " : "");
    std::cout << "}\n";
}
 
int main()
{
    // (1) Default constructor
    std::set<std::string> a;
    a.insert("horse");
    a.insert("cat");
    a.insert("dog");
    println("1) a: ", a);
 
    // (4) Range constructor
    std::set<std::string> b(a.find("dog"), a.end());
    println("2) b: ", b);
 
    // (6) Copy constructor
    std::set<std::string> c(a);
    c.insert("another horse");
    println("3) c: ", c);
 
    // (8) Move constructor
    std::set<std::string> d(std::move(a));
    println("4) d: ", d);
    println("5) a: ", a);
 
    // (10) Initializer list constructor
    std::set<std::string> e{"one", "two", "three", "five", "eight"};
    println("6) e: ", e);
 
    // Custom comparison
    std::set<Point, PointCmp> f = {{2, 5}, {3, 4}, {1, 1}};
    f.insert({1, -1}); // This fails because the magnitude of (1,-1) equals (1,1)
    println("7) f: ", f);
 
    // (12) Range constructor
    const auto w = {"Eurybia", "Theia", "Rhea", "Aura", "Mnemosyne", "Mnemosyne"};
#if __cpp_lib_containers_ranges
    std::set<std::string> g(std::from_range, w); // overload (12)
#else
    std::set<std::string> g(w.begin(), w.end()); // fallback to (4)
#endif
    println("8) g: ", g);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2076 | C++11 | overload (4) conditionally required Key to be CopyInsertable into *this | not required |
| LWG 2193 | C++11 | the default constructor was explicit | made non-explicit |

## See also
- [operator=](/cpp/container/set/operator/)
