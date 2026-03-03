---
title: "std::map<Key,T,Compare,Allocator>::insert"
source_path: "cpp/container/map/insert"
category: "container"
since: "C++11"
---

Inserts element(s) into the container, if the container doesn't already contain an element with an equivalent key.

## Declarations
```cpp
std::pair<iterator, bool> insert( const value_type& value );
```

```cpp
template< class P >
std::pair<iterator, bool> insert( P&& value );
```
_(since C++11)_

```cpp
std::pair<iterator, bool> insert( value_type&& value );
```
_(since C++17)_

```cpp
iterator insert( iterator pos, const value_type& value );
```
_(until C++11)_

```cpp
iterator insert( const_iterator pos, const value_type& value );
```
_(since C++11)_

```cpp
template< class P >
iterator insert( const_iterator pos, P&& value );
```
_(since C++11)_

```cpp
iterator insert( const_iterator pos, value_type&& value );
```
_(since C++17)_

```cpp
template< class InputIt >
void insert( InputIt first, InputIt last );
```

```cpp
void insert( std::initializer_list<value_type> ilist );
```
_(since C++11)_

```cpp
insert_return_type insert( node_type&& nh );
```
_(since C++17)_

```cpp
iterator insert( const_iterator pos, node_type&& nh );
```
_(since C++17)_

## Parameters
- `pos`: iterator to the position before which the new element will be inserted
- `value`: element value to insert
- `first, last`: range of elements to insert
- `ilist`: initializer list to insert the values from
- `nh`: a compatible node handle

## Notes
The hinted insert (4-6) does not return a boolean in order to be signature-compatible with positional insert on sequential containers, such as [std::vector::insert](/cpp/container/vector/insert/). This makes it possible to create generic inserters such as [std::inserter](/cpp/iterator/inserter/). One way to check success of a hinted insert is to compare [size()](/cpp/container/map/size/) before and after.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <map>
#include <string>
using namespace std::literals;
 
template<typename It>
void print_insertion_status(It it, bool success)
{
    std::cout << "Insertion of " << it->first
              << (success ? " succeeded\n" : " failed\n");
}
 
int main()
{
    std::map<std::string, float> heights;
 
    // Overload 3: insert from rvalue reference
    const auto [it_hinata, success] = heights.insert({"Hinata"s, 162.8});
    print_insertion_status(it_hinata, success);
 
    {
        // Overload 1: insert from lvalue reference
        const auto [it, success2] = heights.insert(*it_hinata);
        print_insertion_status(it, success2);
    }
    {
        // Overload 2: insert via forwarding to emplace
        const auto [it, success] = heights.insert(std::pair{"Kageyama", 180.6});
        print_insertion_status(it, success);
    }
    {
        // Overload 6: insert from rvalue reference with positional hint
        const std::size_t n = std::size(heights);
        const auto it = heights.insert(it_hinata, {"Azumane"s, 184.7});
        print_insertion_status(it, std::size(heights) != n);
    }
    {
        // Overload 4: insert from lvalue reference with positional hint
        const std::size_t n = std::size(heights);
        const auto it = heights.insert(it_hinata, *it_hinata);
        print_insertion_status(it, std::size(heights) != n);
    }
    {
        // Overload 5: insert via forwarding to emplace with positional hint
        const std::size_t n = std::size(heights);
        const auto it = heights.insert(it_hinata, std::pair{"Tsukishima", 188.3});
        print_insertion_status(it, std::size(heights) != n);
    }
 
    auto node_hinata = heights.extract(it_hinata);
    std::map<std::string, float> heights2;
 
    // Overload 7: insert from iterator range
    heights2.insert(std::begin(heights), std::end(heights));
 
    // Overload 8: insert from initializer_list
    heights2.insert({{"Kozume"s, 169.2}, {"Kuroo", 187.7}});
 
    // Overload 9: insert node
    const auto status = heights2.insert(std::move(node_hinata));
    print_insertion_status(status.position, status.inserted);
 
    node_hinata = heights2.extract(status.position);
    {
        // Overload 10: insert node with positional hint
        const std::size_t n = std::size(heights2);
        const auto it = heights2.insert(std::begin(heights2), std::move(node_hinata));
        print_insertion_status(it, std::size(heights2) != n);
    }
 
    // Print resulting map
    std::cout << std::left << '\n';
    for (const auto& [name, height] : heights2)
        std::cout << std::setw(10) << name << " | " << height << "cm\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 233 | C++98 | pos was just a hint, it could be totally ignored | the insertion is required tobe as close as possible to theposition just prior to pos |
| LWG 264 | C++98 | the complexity of overload (7) was required to be linear ifthe range [first, last) is sorted according to Compare | removed the linear requirementin this special case |
| LWG 316 | C++98 | in the return value of overload (1), it was not specifiedwhich bool value indicates a successful insertion | success isindicated by true |
| LWG 2005 | C++11 | overloads (2,5) were poorly described | improved the description |

## See also
- [emplace](/cpp/container/map/emplace/)
- [emplace_hint](/cpp/container/map/emplace_hint/)
- [insert_or_assign](/cpp/container/map/insert_or_assign/)
- [inserter](/cpp/iterator/inserter/)
- [std::insert_iterator](/cpp/iterator/insert_iterator/)
