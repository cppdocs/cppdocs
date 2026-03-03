---
title: "std::vector<T,Allocator>::assign"
source_path: "cpp/container/vector/assign"
category: "container"
---

Replaces the contents of the container.

## Declarations
```cpp
void assign( size_type count, const T& value );
```
_(constexpr since C++20)_

```cpp
template< class InputIt >
void assign( InputIt first, InputIt last );
```
_(constexpr since C++20)_

```cpp
void assign( std::initializer_list<T> ilist );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `count`: the new size of the container
- `value`: the value to initialize elements of the container with
- `first, last`: the range to copy the elements from
- `ilist`: std::initializer_list to copy the values from

## Example
```cpp
#include <vector>
#include <iostream>
#include <string>
 
int main()
{
    std::vector<char> characters;
 
    auto print_vector = [&]()
    {
        for (char c : characters)
            std::cout << c << ' ';
        std::cout << '\n';
    };
 
    characters.assign(5, 'a');
    print_vector();
 
    const std::string extra(6, 'b');
    characters.assign(extra.begin(), extra.end());
    print_vector();
 
    characters.assign({'C', '+', '+', '1', '1'});
    print_vector();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2209 | C++98 | the replacement operation was required to be implemented aserasing all existing elements followed by inserting the given elements | removed therequirement |

## See also
- [assign_range](/cpp/container/vector/assign_range/)
- [operator=](/cpp/container/vector/operator/)
