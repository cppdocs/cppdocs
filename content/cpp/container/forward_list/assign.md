---
title: "std::forward_list<T,Allocator>::assign"
source_path: "cpp/container/forward_list/assign"
category: "container"
since: "C++11"
---

Replaces the contents of the container.

## Declarations
```cpp
void assign( size_type count, const T& value );
```
_(since C++11)_

```cpp
template< class InputIt >
void assign( InputIt first, InputIt last );
```
_(since C++11)_

```cpp
void assign( std::initializer_list<T> ilist );
```
_(since C++11)_

## Parameters
- `count`: the new size of the container
- `value`: the value to initialize elements of the container with
- `first, last`: the range to copy the elements from
- `ilist`: std::initializer_list to copy the values from

## Example
```cpp
#include <forward_list>
#include <iostream>
#include <string>
 
int main()
{
    std::forward_list<char> characters;
 
    auto print_forward_list = [&]()
    {
        for (char c : characters)
            std::cout << c << ' ';
        std::cout << '\n';
    };
 
    characters.assign(5, 'a');
    print_forward_list();
 
    const std::string extra(6, 'b');
    characters.assign(extra.begin(), extra.end());
    print_forward_list();
 
    characters.assign({'C', '+', '+', '1', '1'});
    print_forward_list();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2209 | C++11 | the replacement operation was required to be implemented aserasing all existing elements followed by inserting the given elements | removed therequirement |

## See also
- [assign_range](/cpp/container/forward_list/assign_range/)
- [operator=](/cpp/container/forward_list/operator/)
