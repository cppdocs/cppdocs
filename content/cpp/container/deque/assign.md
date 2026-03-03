---
title: "std::deque<T,Allocator>::assign"
source_path: "cpp/container/deque/assign"
category: "container"
since: "C++11"
---

Replaces the contents of the container.

## Declarations
```cpp
void assign( size_type count, const T& value );
```

```cpp
template< class InputIt >
void assign( InputIt first, InputIt last );
```

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
#include <deque>
#include <iostream>
#include <string>
 
int main()
{
    std::deque<char> characters;
 
    auto print_deque = [&]()
    {
        for (char c : characters)
            std::cout << c << ' ';
        std::cout << '\n';
    };
 
    characters.assign(5, 'a');
    print_deque();
 
    const std::string extra(6, 'b');
    characters.assign(extra.begin(), extra.end());
    print_deque();
 
    characters.assign({'C', '+', '+', '1', '1'});
    print_deque();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2209 | C++98 | the replacement operation was required to be implemented aserasing all existing elements followed by inserting the given elements | removed therequirement |

## See also
- [assign_range](/cpp/container/deque/assign_range/)
- [operator=](/cpp/container/deque/operator/)
