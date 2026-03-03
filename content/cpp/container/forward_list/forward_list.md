---
title: "std::forward_list<T,Allocator>::forward_list"
source_path: "cpp/container/forward_list/forward_list"
category: "container"
since: "C++23"
---

Constructs a new forward_list from a variety of data sources, optionally using a user supplied allocator alloc.

## Declarations
```cpp
forward_list() : forward_list(Allocator()) {}
```

```cpp
explicit forward_list( const Allocator& alloc );
```

```cpp
explicit forward_list( size_type count,
const Allocator& alloc = Allocator() );
```

```cpp
forward_list( size_type count, const T& value,
const Allocator& alloc = Allocator() );
```

```cpp
template< class InputIt >
forward_list( InputIt first, InputIt last,
const Allocator& alloc = Allocator() );
```

```cpp
template< container-compatible-range<T> R >
forward_list( std::from_range_t, R&& rg,
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
forward_list( const forward_list& other );
```

```cpp
forward_list( forward_list&& other );
```

```cpp
forward_list( const forward_list& other, const Allocator& alloc );
```
_(until C++23)_

```cpp
forward_list( const forward_list& other,
const std::type_identity_t<Allocator>& alloc );
```
_(since C++23)_

```cpp
forward_list( forward_list&& other, const Allocator& alloc );
```
_(until C++23)_

```cpp
forward_list( forward_list&& other,
const std::type_identity_t<Allocator>& alloc );
```
_(since C++23)_

```cpp
forward_list( std::initializer_list<T> init,
const Allocator& alloc = Allocator() );
```

## Parameters
- `alloc`: allocator to use for all memory allocations of this container
- `count`: the size of the container
- `value`: the value to initialize elements of the container with
- `first, last`: the range to copy the elements from
- `other`: another container to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with
- `rg`: a container compatible range

## Notes
After container move construction (overload (8)), references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

## Example
```cpp
#include <forward_list>
#include <iostream>
#include <string>
 
template<typename T>
std::ostream& operator<<(std::ostream& s, const std::forward_list<T>& v)
{
    s.put('{');
    for (char comma[]{'\0', ' ', '\0'}; const auto& e : v)
        s << comma << e, comma[0] = ',';
    return s << "}\n";
}
 
int main()
{
    // C++11 initializer list syntax:
    std::forward_list<std::string> words1{"the", "frogurt", "is", "also", "cursed"};
    std::cout << "1: " << words1;
 
    // words2 == words1
    std::forward_list<std::string> words2(words1.begin(), words1.end());
    std::cout << "2: " << words2;
 
    // words3 == words1
    std::forward_list<std::string> words3(words1);
    std::cout << "3: " << words3;
 
    // words4 is {"Mo", "Mo", "Mo", "Mo", "Mo"}
    std::forward_list<std::string> words4(5, "Mo");
    std::cout << "4: " << words4;
 
    const auto rg = {"cat", "cow", "crow"};
#ifdef __cpp_lib_containers_ranges
    std::forward_list<std::string> words5(std::from_range, rg); // overload (6)
#else
    std::forward_list<std::string> words5(rg.begin(), rg.end()); // overload (5)
#endif
    std::cout << "5: " << words5;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2193 | C++11 | the default constructor was explicit | made non-explicit |
| LWG 2210 | C++11 | overload (3) did not have an allocator parameter | added the parameter |
| N3346 | C++11 | for overload (3), the elements inthe container were value-initialized | they are default-inserted |

## See also
- [assign](/cpp/container/forward_list/assign/)
- [operator=](/cpp/container/forward_list/operator/)
